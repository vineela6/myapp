import React from 'react';


const Home=()=>{

return(
    <>


<div className="py-4">
            <div className="row">
            <img class="" src="https://besthqwallpapers.com/Uploads/18-12-2019/116229/thumb2-chocolate-dessert-with-cream-glass-jars-chocolate-cream-chocolate-desserts.jpg"  height="400px"width="1380px" />
            </div>
            <hr style={{ borderTop: '2px dashed black' }}></hr>
            <div className="row bg-light">
                <div className="col-4 pt-3 text-center">
                    <img className="rounded-circle" width="250"  height="250 " src="https://pinchofyum.com/wp-content/uploads/bakedminidonuts11.jpg" />
                    <h3 className="pt-3" >Desserts</h3>
                </div>
                <div className="col-4 pt-3 text-center">
                    <img className="rounded-circle" width="250"  height="250"src="https://media1.santabanta.com/full1/Fare/Desserts/desserts-136a.jpg" />
                   <h3 className="pt-3" >Milkshakes</h3>
                </div>
                <div className="col-4 pt-3 text-center">
                    <img className="rounded-circle "width="250"  height="250" src="https://nomtasticfoods.net/wp-content/uploads/2017/10/The-Baked-Bear-15.jpg" />
                    <h3 className="pt-3" >Scoops</h3>
                </div>
            </div>
            <hr style={{ borderTop: '2px dashed black' }}></hr>
            <h1 className="text-center" style={{ fontFamily: 'cursive' }}>WHAT'S BEEN SAID</h1>
            <div class="card-deck" style={{fontFamily:'cursive'}}>
            <div class="card m-4">
                <div class="card-body text-center ">
                    <p style={{height:'170px'}} class="card-text p-3">"I've really given any thought to trying vegan icecream in  This chocolate icecream blew my mind because it's  tastes just as good!" </p>
                    <p><b>-@GRIDSHOTS</b></p>
                </div>
            </div>
            <div class="card m-4">
                <div class="card-body text-center">
                    <p style={{height:'170px'}} class="card-text p-3 ">"Your vegan ice cream tastes much better than normal stuff_not only equal _100"</p>
                    <p><b>-@STUDIOASEAN.KL</b></p>
                </div>
            </div>
            <div class="card m-4 ">
                <div class="card-body text-center">
                    <p style={{height:'170px'}} class="card-text p-3">"I love the natural fruit icecream and great tatse and affordable price it was" </p>
                 <p><b>-@KRISHNA</b></p>
                </div>
            </div>
            <div class="card m-4">
                <div class="card-body text-center">
                    <p style={{height:'170px'}} class="card-text p-3">" it's such a lovely icecream and affordable price and tatse of icecream is natural I love the chocolate flavours" </p>
                    <p><b>-@RAM</b></p>
                </div>
            </div>
        
        </div>
        </div>
</>
)
}
export default Home;