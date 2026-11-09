function createDetailDialog(dialog, translate, linkLabel) {
  const card = dialog.querySelector('#modal-card');
  const body = dialog.querySelector('.modal-body');
  const heading = dialog.querySelector('#modal-title');
  const image = dialog.querySelector('#modal-preview-image');
  const description = dialog.querySelector('#modal-description');
  const evidence = dialog.querySelector('#modal-project-evidence');
  const links = dialog.querySelector('#modal-project-links');
  const metadata = dialog.querySelector('#modal-meta');
  const download = dialog.querySelector('#modal-download');
  let modalScrollY = 0;
  let returnFocus = null;

  function updatePreview(item) {
    const src = item.demoMedia?.src || item.previewImage;
    card.classList.toggle('has-preview-image', Boolean(src));
    image.hidden = !src;
    image.alt = item.demoMedia?.alt || '';
    if (src) image.src = src;
    else image.removeAttribute('src');
    dialog.querySelector('.modal-preview-label').textContent = item.previewLabel || '';
    dialog.querySelector('#modal-preview-title').textContent = item.title || '';
  }

  function updateProjectDetails(item) {
    evidence.replaceChildren();
    evidence.hidden = !item.evidence;
    if (item.evidence) {
      const section = document.createElement('section');
      section.className = 'project-evidence';
      const result = document.createElement('p');
      result.className = 'project-evidence-result';
      result.textContent = item.evidence.result;
      const list = document.createElement('dl');
      list.className = 'project-evidence-list';
      for (const [label, value] of item.evidence.details) {
        const row = document.createElement('div');
        const term = document.createElement('dt');
        const detail = document.createElement('dd');
        term.textContent = label;
        detail.textContent = value;
        row.append(term, detail);
        list.append(row);
      }
      section.append(result, list);
      evidence.append(section);
    }

    links.replaceChildren(...(item.links || []).map(({ label, url }) => {
      const link = document.createElement('a');
      link.className = 'modal-project-link';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = linkLabel(label);
      return link;
    }));
    links.hidden = !links.childElementCount;
  }

  function updateCertificateDetails(item) {
    const paragraphs = (item.detailDescription || '').split(/\n\s*\n/).filter(Boolean);
    description.replaceChildren(...paragraphs.map((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text.trim();
      return paragraph;
    }));
    description.hidden = !paragraphs.length;

    metadata.replaceChildren(...(item.meta || []).map((entry) => {
      const field = document.createElement('li');
      field.className = 'modal-meta-item';
      const separator = entry.indexOf(':');
      if (separator < 0) {
        field.textContent = entry;
      } else {
        const label = document.createElement('span');
        const value = document.createElement('span');
        label.className = 'modal-meta-label';
        value.className = 'modal-meta-value';
        label.textContent = entry.slice(0, separator).trim();
        value.textContent = entry.slice(separator + 1).trim();
        field.append(label, value);
      }
      return field;
    }));
    metadata.hidden = !metadata.childElementCount;

    for (const attribute of ['href', 'download', 'target', 'rel']) download.removeAttribute(attribute);
    download.hidden = !item.courseUrl && !item.file;
    if (item.courseUrl) {
      download.href = item.courseUrl;
      download.target = '_blank';
      download.rel = 'noopener noreferrer';
      download.textContent = translate('portfolioCourseButton', 'Kurs auf LinkedIn Learning');
    } else if (item.file) {
      download.href = item.file;
      download.download = item.file.split('/').pop();
      download.textContent = translate('portfolioDownloadButton', 'Download PDF');
    }
  }

  dialog.querySelector('#modal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('top');
    window.scrollTo({ top: modalScrollY, behavior: 'instant' });
    returnFocus?.focus({ preventScroll: true });
    returnFocus = null;
  });

  return (item, type) => {
    if (dialog.open) return;
    const project = type === 'projects';
    heading.textContent = item.title || translate('modal.title', 'Detailansicht');
    card.classList.toggle('is-project', project);
    card.classList.toggle('is-document', !project);
    updatePreview(item);
    updateProjectDetails(project ? item : {});
    updateCertificateDetails(project ? {} : item);

    returnFocus = document.activeElement;
    modalScrollY = window.scrollY;
    document.body.classList.add('modal-open');
    document.body.style.top = `-${modalScrollY}px`;
    dialog.showModal();
    body.scrollTop = 0;
  };
}
