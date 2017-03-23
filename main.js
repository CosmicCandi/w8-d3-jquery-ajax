$(document).ready(function(){

  var source   = $("#chirp_content").html();
  var template = Handlebars.compile(source);


  Handlebars.registerHelper('pretty_time', function(date) {
   return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  });

  $.get({url: 'https://sleepy-gorge-91783.herokuapp.com/chirps/timeline', data_type: 'json'})
    .done(function(response){
      chirps = {
        timeline: response
      }
       $("#chirps_container").html(template(chirps))
      // response.forEach(function(chirp){
      //   $('#chirp_content').append(
      //     `
      //       <div class="col-sm-4">
      //         <div class="media">
      //           <div class="media-left media-middle">
      //             <img class="img-circle media-object" height="64" width="64" src="${chirp.user.image}" alt="${chirp.user.username}'s avatar">
      //             <span class="text-center">${chirp.user.username}</span>
      //           </div>
      //
      //           <div class="media-body">
      //             ${chirp.body}<br />
      //             Created: <span class="created_at"> ${moment(chirp.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
      //           </div>
      //         </div>
      //       </div>
      //     `
      //   )
      // })
   })
})
