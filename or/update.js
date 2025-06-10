const site = "https://sites.google.com/view/terminal-games";
const drive = "https://drive.google.com/drive/folders/1Fc5m2RE5XyS05-HWORFb7ptZXnn5fAxd";
const file = "https://drive.usercontent.google.com/u/0/uc?id=1-kzVDiGzp3ZsWyqT-j3_Ksjz3JisI9NL&export=download";
const sheet = "https://docs.google.com/spreadsheets/u/0/d/1sQ9YZpkpZfFlBKKuGHKwyHQ6Iyd38ciy3JAjNVFpQNs/htmlembed/sheet?headers=false&gid=270422712";
const button = document.getElementById("update");
const vc = document.getElementById('versionCounter');
const st1 = "window.open(\'";
const st2 = "\',\'_blank')";
const clickdata = st1.concat(file,st2);
button.disabled = false;
button.setAttribute("onclick",clickdata);
const vdiv = document.getElementById("version");
const version = vdiv.className;
const latest = 9;
document.getElementById("TitleLink").setAttribute("href",site);
document.getElementById("drive").setAttribute("href",drive);
document.getElementById("UrlRef").setAttribute("src",sheet);
console.log(version);
if (version == latest) {
  vc.textContent = "Version: Up to date";
  button.textContent = 'Download';
} else if (version < latest && version > 0) {
  vc.textContent = "Version: New version available";
  vc.style.color = "#ff0000";
} else {
  vc.textContent = "Version: Invalid";
  vc.style.color = "#ff0000";
};
