    const ctrlFrame = document.getElementById("ctrlFrame");
    const cfparts = document.getElementById("ctrlFrameParts");
    const ruffleBox = document.getElementById('RuffleBox');
    const arrow = document.getElementById("arrowsymholder");
    const UploadButton = document.getElementById('UploadButton');
    const Upload = document.getElementById('upload');
    const UploadText = document.getElementById('UploadText');
    const UploadedIcon = document.getElementById('DisplayImage');
    const PageIcon = document.getElementById('PageIcon');
    const Title = document.getElementById('PageTitle');
    const TitleInput = document.getElementById('TitleInput');
    const Embed = document.getElementById('Embed');
    const UrlInput = document.getElementById('UrlInput');
    let cfState = false;
    let iconURL;
    function cf() {
      cfState = !cfState;

  ctrlFrameParts.style.display = cfState ? "block" : "none";
  document.getElementById("Embed").style.display = cfState ? "none" : "block";
  document.getElementById("Embed2").style.display = cfState ? "none" : (ruffleBox.checked ? "block" : "none");

  arrow.className = cfState ? "arrowsym up" : "arrowsym down"
    };


    Upload.addEventListener('change', (event) =>{
	const icon = event.target.files[0];
    UploadText.textContent = "Tab Icon: " + this.files[0].name
    });
    UploadButton.onclick = function() {
      document.getElementById('upload').click();
    };

Upload.onchange = evt => {
   const [file] = Upload.files;
  if (file) {
    iconURL =  URL.createObjectURL(file);
    UploadedIcon.src = iconURL;
    PageIcon.href = iconURL;
    return iconURL;
  };
};
TitleInput.addEventListener('change', function(event) {
  Title.textContent = TitleInput.value;
});
UrlInput.addEventListener('change', function(event) {
  document.getElementById('Embed').src = UrlInput.value;
  if (ruffleBox.checked) {
  document.getElementById('Embed2').src = UrlInput.value;
	};
});
ruffleBox.addEventListener('change', function() {
  document.getElementById('Embed').src = UrlInput.value;
  document.getElementById('Embed2').src = UrlInput.value;
});
function deleteFrame() {
  ctrlFrame.remove();
  document.getElementById('Embed').height = 100vh;
  document.getElementById('Embed2').height = 100vh;
  cf();
}
