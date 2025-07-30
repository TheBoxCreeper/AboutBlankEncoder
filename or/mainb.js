   const ctrlFrame = document.getElementById(\"ctrlFrame\");
    const ctrlFrameParts = document.getElementById(\"ctrlFrameParts\");
    const ruffleBox = document.getElementById(\'RuffleBox\');
    const arrow = document.getElementById(\"arrowsymholder\");
    const UploadButton = document.getElementById(\'UploadButton\');
    const Upload = document.getElementById(\'upload\');
    const UploadText = document.getElementById(\'UploadText\');
    const UploadedIcon = document.getElementById(\'DisplayImage\');
    const PageIcon = document.getElementById(\'PageIcon\');
    const Title = document.getElementById(\'PageTitle\');
    const TitleInput = document.getElementById(\'TitleInput\');
    const Embed = document.getElementById(\'Embed\');
    const UrlInput = document.getElementById(\'UrlInput\');
    const bodyHtml = document.getElementById(\'bodyHtml\');
    let cfState = false;
    let initialState;
    if (bodyHtml === null) {
	initialState = true;
    }
    let iconURL = UrlInput.value;
    function cf() {
      if (cfState === true) {
 	cfState = false;
} else {
cfState = true;
}
  ctrlFrameParts.style.display = cfState ? \"block\" : \"none\";
  if (initialState === false) {
  document.getElementById(\"Embed\").style.display = cfState ? \"none\" : \"block\";
  document.getElementById(\"Embed2\").style.display = cfState ? \"none\" : (ruffleBox.checked ? \"block\" : \"none\");
  } else {
bodyHtml.style.display=  cfState ? \"none\" : \"block\";
}
  arrow.className = cfState ? \"arrowsym up\" : \"arrowsym down\"
    };


    Upload.addEventListener(\'change\', (event) =>{
	const icon = event.target.files[0];
    UploadText.textContent = \"Tab Icon: \" + icon.name;
    });
    UploadButton.onclick = function() {
      document.getElementById(\'upload\').click();
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
TitleInput.addEventListener(\'change\', function(event) {
  Title.textContent = TitleInput.value;
});
UrlInput.addEventListener(\'change\', function(event) {
  initialState = false;
  document.getElementById(\'Embed\').src = UrlInput.value;
  if (ruffleBox.checked) {
  document.getElementById(\'Embed2\').src = UrlInput.value;
	};
});
ruffleBox.addEventListener(\'change\', function() {
  initialState = false;
  document.getElementById(\'Embed\').src = UrlInput.value;
  document.getElementById(\'Embed2\').src = UrlInput.value;
});
function deleteFrame() {
  ctrlFrame.style.display = \'none\';
  initialState = false;
  document.getElementById(\'Embed\').style.height = \'100vh\';
  document.getElementById(\'Embed2\').style.height = \'100vh\';
  cf();
}
//One line version: const ctrlFrame = document.getElementById(\"ctrlFrame\");const ctrlFrameParts = document.getElementById(\"ctrlFrameParts\");const ruffleBox = document.getElementById(\'RuffleBox\');const arrow = document.getElementById(\"arrowsymholder\");const UploadButton = document.getElementById(\'UploadButton\');const Upload = document.getElementById(\'upload\');const UploadText = document.getElementById(\'UploadText\');const UploadedIcon = document.getElementById(\'DisplayImage\');const PageIcon = document.getElementById(\'PageIcon\');const Title = document.getElementById(\'PageTitle\');const TitleInput = document.getElementById(\'TitleInput\');const Embed = document.getElementById(\'Embed\');const UrlInput = document.getElementById(\'UrlInput\');const bodyHtml = document.getElementById(\'bodyHtml\');let cfState = false;let initialState;if (bodyHtml === null) {initialState = true;}let iconURL = UrlInput.value;function cf() {if (cfState === true) { cfState = false;} else {cfState = true;}ctrlFrameParts.style.display = cfState ? \"block\" : \"none\";if(initialState === false) {document.getElementById(\"Embed\").style.display = cfState ? \"none\" : \"block\";document.getElementById(\"Embed2\").style.display = cfState ? \"none\" : (ruffleBox.checked ? \"block\" : \"none\");} else {bodyHtml.style.display=cfState ? \"none\" : \"block\";}arrow.className = cfState ? \"arrowsym up\" : \"arrowsym down\"};Upload.addEventListener(\'change\', (event) =>{const icon = event.target.files[0];UploadText.textContent = \"Tab Icon: \" + icon.name;});UploadButton.onclick = function() {document.getElementById(\'upload\').click();};Upload.onchange = evt => {const[file]= Upload.files;if (file) {iconURL =URL.createObjectURL(file);UploadedIcon.src = iconURL;PageIcon.href = iconURL;return iconURL;};};TitleInput.addEventListener(\'change\',function(event) {Title.textContent = TitleInput.value;});UrlInput.addEventListener(\'change\', function(event) {initialState = false;document.getElementById(\'Embed\').src = UrlInput.value;if (ruffleBox.checked) {document.getElementById(\'Embed2\').src = UrlInput.value;};});ruffleBox.addEventListener(\'change\', function() {initialState = false;document.getElementById(\'Embed\').src = UrlInput.value;document.getElementById(\'Embed2\').src = UrlInput.value;});function deleteFrame() {ctrlFrame.style.display = \'none\';initialState = false;document.getElementById(\'Embed\').style.height = \'100vh\';document.getElementById(\'Embed2\').style.height = \'100vh\';cf();}
