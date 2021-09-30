function initMap()
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19.219449886294345,  lng:  72.86810487222968},
        zoom: 18,
        mapId: '919fa1e6081cfb91',
        mapTypeControl: false,
        fullscreenControl:false,
        streetViewControl:false
      });
      const markers = 
      [
        [
          "Yoshi's house",
          19.219449886294345,
          72.86810487222968,
          "yoshihouse.jpg",
          39,
          31
       ],
       [ 
          "You are Here!",
          19.216897392662307,
          72.87060478713208,
          "pointer.png",
          39,
          31
       ],
       [  
          "Ghost House",
          34.7539122058859,
          135.3570623182008,
          "ghosthouse.jpg",
          39,
          31
       ],
       [
          "Castle",
          34.7459122058859,
          135.1590623182008,
          "castle.jpg",
          39,
          31
       ],
      [
          "Pipe",
          34.8529122058859,
          135.9630623182008,
          "pipe.jpg",
          39,
          31
       ],
        [
           "Star",
             34.1239122058859,
           135.9650623182008,
            "star.jpg",
           39,
           31
        ],    
        [
            "green hill",
            34.1649122058859,
            135.2450623182008,
            "greenhill",
            39,
            31
          ],     
                ];

      for (let i=0; i<markers.length; i++)
      {
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
          position: { lat: currMarker[1], lng: currMarker[2] },
          map,
          title: currMarker[0],
                 
          icon: 
          {
            url: currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
          },
          animation: google.maps.Animation.DROP,
        });

      }
      
      
       
}




