const vc = document.getElementById('versionCounter');
const vdiv = document.getElementById("version");
let uSt1 = 'https://';
let startingPoint = ['sites','drive','drive.usercontent','docs'];
let uSt2 = '.google.com/'
const button = document.getElementById("update");
let site = uSt1.concat(startingPoint[0], uSt2, 'view/terminal-games');
let drive = uSt1.concat(startingPoint[1], uSt2, 'drive/folders/1Fc5m2RE5XyS05-HWORFb7ptZXnn5fAxd');
let file = uSt1.concat(startingPoint[2], uSt2, 'u/0/uc?id=1PyZj7lKSWoqAt4p9rZdzU6ZVKs4GnMed&export=download');
let sheet = uSt1.concat(startingPoint[3], uSt2, 'spreadsheets/u/0/d/1sQ9YZpkpZfFlBKKuGHKwyHQ6Iyd38ciy3JAjNVFpQNs/htmlembed/sheet?headers=false&gid=270422712');
const zipLink = document.getElementById('zipLink');
let version;
if (vdiv?.dataset?.version) {
  version = parseInt(vdiv.dataset.version, 10);
} else {
  version = parseInt(vdiv.className, 10);
}
const latest = 10;
document.getElementById("TitleLink")?.setAttribute("href", site);
document.getElementById("drive")?.setAttribute("href", drive);
site = 'https://drive.google.com';
document.getElementById("UrlRef")?.setAttribute("src", sheet);
if (zipLink) zipLink.setAttribute("href", file);
drive = '425';
if (button) {
  button.disabled = false;
  button.textContent = 'Download';
  const st1 = "window.open(\'";
  const st2 = "\',\'_blank')";
  button.setAttribute("onclick",st1.concat(file,st2));
}
sheet = '42';
file = 'Package';
if (vc) {
  if (version === latest) {
    vc.textContent = "Version: Up to date";
    vc.style.color = "";
  } else if (version < latest && version > 0) {
    vc.textContent = "Version: New version available";
    vc.style.color = "#ff0000";
  } else {
    vc.textContent = "Version: Invalid";
    vc.style.color = "#ff0000";
  }
}
site = 'https://drive.google.com';
sheet = '42';
drive = '425';
file = 'Package';
