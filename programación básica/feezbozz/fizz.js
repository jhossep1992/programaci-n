for(i=1 ; i<101 ; i++)
{
	if(i%3 == 0 && i%5==0)
	{
		document.write(i + " Fizz / Boss <br />");
		
	}
	else if (i%3 == 0)
	{
		document.write(i + " Fizz");
		document.write("<br>");
	}
 else if (i%5 == 0)
	{
		document.write(i + " Bozz");
		document.write("<br>");
	}

	else {
		document.write(i);
		document.write("<br>");
	}

}
