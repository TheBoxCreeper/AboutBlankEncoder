const config = [
	/* Styles customization*/
	{name: 'css-base-color' , value: '#000000' }, /* Base or Background Color*/
	{name: 'css-primary-color' , value: '#00FF00' }, /* Text Color*/
	{name: 'css-secondary-color' , value: '#00AA00' }, /* Secondary Color*/
	{name: 'css-disabled-color' , value: '#005000' }, /* Disabled Color*/
	{name: 'css-main-font' , value: 'Inconsolata' }, /* Font, Note that only specific fonts are supported. Open font.css for all available fonts.*/
	/* Encoder Settings*/
	{name: 'enc-link-begin' , value: 'http://' }, /* Link Beginning, if your encoding url does not begin with a specific set of values, this will be inserted into your url. Disable this with an empty value. Acceptable values are https://, file://, http://, data:, chrome-extension://, none*/
	{name: 'enc-default-mask-url' , value: '' }, /* Default Masking Icon Url, Use a url from the encoder's point of view. Example: 'favicons/Google Slides.png'*/
	{name: 'enc-default-mask-title' , value: '' }, /* Default Masking Title'*/
	{name: 'enc-html-insertion' , value: false }, /* Enable the option to insert html*/
];
