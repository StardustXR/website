async function loadDoc() {
  const hash = decodeURIComponent(location.hash.slice(1)) || '01-get-started/01-What-is-Stardust';
  const file = hash + '.md';
  const res = await fetch(file);
  const container = document.getElementById('content');
  if (!res.ok) {
    container.textContent = 'Document not found.';
    return;
  }
  let text = await res.text();
  text = text.replace(/^---[\s\S]*?---\n/, '');
  container.innerHTML = marked.parse(text);
}
window.addEventListener('hashchange', loadDoc);
window.addEventListener('load', loadDoc);
