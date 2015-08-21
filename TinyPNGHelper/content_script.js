do
{

var host = window.location.host;
if(host.indexOf("tinypng.com") == -1)
{
	window.open("https://tinypng.com/");
	break;
}
var htmlstr = document.body.innerHTML;
var p2 = 0;
var p1 = 0;
var nothing_to_download = true;
while(true)
{
	p1 = htmlstr.indexOf("https://tinypng.com/site/output/",p2);
	if(p1 == -1)
	{
		break;
	}
	nothing_to_download = false;
	p2 = htmlstr.indexOf("\">",p1);
	var url = htmlstr.substring(p1,p2);
	window.open(url);
}
if(nothing_to_download)
{
	alert("can't find any image to download =_= ");
}


}while(0)