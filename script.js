const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.onclick = () => {
  sidebar.classList.toggle('open');
};
console.log("Script loaded!");
