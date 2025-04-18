    const ctrlFrame = document.getElementById("ctrlFrame");
    const cfparts = document.getElementById("ctrlFrameParts");
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
      if (cfState) {
        cfState = false;
      ctrlFrameParts.style.display = "none";
      Embed.style.display = "block";
      arrow.className = "arrowsym down";
      } else {
        cfState = true;
        ctrlFrameParts.style.display = "block";
        Embed.style.display = "none";
        arrow.className = "arrowsym up";
      };
    };
    Upload.addEventListener('change', function(){
    UploadText.textContent = "Tab Icon: " + this.files[0].name
    })
    UploadButton.onclick = function() {
      document.getElementById('upload').click();
    };
    Upload.addEventListener('change', (event) => {
  const icon = event.target.files[0];
});

    function UIF() {
  const [file] = Upload.files;
  if (file) {
    let iconURL =  URL.createObjectURL(file);
    UploadedIcon.src = iconURL;
    PageIcon.href = iconURL;
    return iconURL;
  } else {
    let iconURL = undefined;
    return iconURL;
  };
};
Upload.onchange = evt => {
  UIF();
};
TitleInput.addEventListener('change', function(event) {
  console.log('Input value changed (on blur):', event.target.value);
  Title.textContent = TitleInput.value;
});
UrlInput.addEventListener('change', function(event) {
  console.log('Input value changed (on blur):', event.target.value);
  Embed.src = UrlInput.value;
});