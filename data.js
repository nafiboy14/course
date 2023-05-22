 let title = document.getElementById("title")
 let duration = document.getElementById("duration")
 let price = document.getElementById("price")
 let imgbanner = document.getElementById("imgbanner")


 let imgBennerDisplay={
  bennerDisplay1: src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&uid=R95019641&ga=GA1.1.189525388.1677897948&semt=ais",
  bennerDisplay2: src="https://img.freepik.com/free-photo/hands-working-with-laptop-title-online-study-screen_1163-2116.jpg?size=626&ext=jpg&uid=R95019641&ga=GA1.2.189525388.1677897948&semt=ais",
  bennerDisplay3: src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?size=626&ext=jpg&uid=R95019641&ga=GA1.2.189525388.1677897948&semt=ais",
   
}

imgbanner.src=imgBennerDisplay.bennerDisplay1
imgbanner2.src=imgBennerDisplay.bennerDisplay2
imgbanner3.src=imgBennerDisplay.bennerDisplay3

 let detail ={
   titledes: "critical thinking",
   durationdes:  "duration: 1 haur 1min",
  pricedes:"$10.0",
}
 let detail2 ={
   titledes: "critical thinking",
   durationdes:  "duration: 1 haur 1min",
  pricedes:"$10.0",
}


title.innerHTML=detail.titledes;
duration.innerHTML=detail.durationdes;
price.innerHTML=detail.pricedes;


title1.innerHTML=detail2.titledes;
duration1.innerHTML=detail2.durationdes;
price1.innerHTML=detail2.pricedes;


title2.innerHTML=detail.titledes;
duration2.innerHTML=detail.durationdes;
price2.innerHTML=detail.pricedes;



