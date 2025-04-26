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
      if (cfState) {
        cfState = false;
      ctrlFrameParts.style.display = "none";
      if (ruffleBox.checked) {
	      document.getElementById('Embed2').style.display = "block";
  	    } else {
     	 document.getElementById('Embed').style.display = "block";
    	  };
      arrow.className = "arrowsym down";
      } else {
        cfState = true;
        ctrlFrameParts.style.display = "block";
       document.getElementById('Embed').style.display = "none";
	document.getElementById('Embed2').style.display = "none";
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
