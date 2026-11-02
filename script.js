function convert() {
  let md = document.getElementById('markdownInput').value;
  
  let html = md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*?)\*/gim, '<i>$1</i>')
    .replace(/\n/gim, '<br>');

  let previewDiv = document.getElementById('htmlOutput');
  previewDiv.innerHTML = `<strong>Generated HTML Code:</strong><br><pre>${escapeHtml(html)}</pre><hr><strong>Preview:</strong><br>${html}`;
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}