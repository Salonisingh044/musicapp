var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon

//genre check
var pop = 0;
var alternative = 0;
var rock = 0;
var chill = 0;

 

function toggleSong(){
		var song = document.querySelector('audio');
        if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        } else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
	
	    }
  function fancyTimeFormat(time)
              {   
                // Hours, minutes and seconds
                var hrs = ~~(time / 3600);
                var mins = ~~((time % 3600) / 60);
                var secs = time % 60;

                // Output like "1:01" or "4:03:59" or "123:03:59"
                var ret = "";

                if (hrs > 0) {
                    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
                }

                ret += "" + mins + ":" + (secs < 10 ? "0" : "");
                ret += "" + secs;
                return ret;
            }    

    function updateCurrentTime() {
                var song = document.querySelector('audio');
                //console.log(song.currentTime);
                //console.log(song.duration);
                var currentTime = Math.floor(song.currentTime);
                currentTime=fancyTimeFormat(currentTime);
                var duration = Math.floor(song.duration);
                duration = fancyTimeFormat(duration)
                $('.time-elapsed').text(currentTime);
                $('.song-duration').text(duration);
                }

var songs_pop = [{
					   'name': 'Tamma Tamma',
					   'artist': 'Neha Kakkar, Monali Thakur',
					   'album': 'Badrinath ki Dulhania',
					   'duration': '2:56',
					   'fileName': 'song1.mp3',
					   'image': 'song1.jpg'
                     },
                     {
          
			
						'name': 'Humma Song',
						'artist': 'Badshah, Shashaa Tirupati',
						'album': 'Ok Jaanu',
						'duration': '3:15',
						'fileName': 'song2.mp3',
						'image': 'song2.jpg'			
                     },
                     {
          
			           'name': 'The Breakup Song',
						'artist': 'Nakash Aziz, Arijit Singh',
						'album': 'Ae Dil Hai Mushkil',
						'duration': '2:29',
						'fileName': 'song4.mp3',
						'image': 'song4.jpg'	
                     },
                     {
                       'name': 'Nashe Si Chadh Gayi',
						'artist': 'Arijit Singh',
						'album': 'Befikre',
						'duration': '2:34',
						'fileName': 'song3.mp3',
						'image': 'song3.jpg'
                      }
                      ]

var songs_rock = [{
                        'name': 'Worth it',
						'artist': 'Fifth Harmony',
						'album': 'Reflection',
						'duration': '3:39',
					    'fileName': 'song13.mp3',
					    'image': 'song13.jpg'
                     },
                     {
                        'name': 'Work from Home',
						'artist': 'Fifth Harmony',
						'album': ' 7/27',
						'duration': '3:40',
						'fileName': 'song14.mp3',
						'image': 'song14.jpg'
                     },
                     {
                   
                        'name': 'Ass Back Home',
						'artist': 'Gym Class Hero, Neon Hitch',
						'album': 'The Papercut Chronicles II',
						'duration': '3:39',
						'fileName': 'song16.mp3',
						'image': 'song16.jpg'
                     },

                     {
                        'name': 'Style',
						'artist': 'Taylor Swift',
						'album': '1989',
						'duration': '3:51',
						'fileName': 'song15.mp3',
						'image': 'song15.jpg'
                     }]


var songs_alternative = [{
                       'name': 'Streo Heart',
						'artist': 'Gym Class Heroes',
						'album': 'The Papercut Chronicles II',
						'duration': '3:31',
					    'fileName': 'song5.mp3',
					    'image': 'song5.jpg'
                     },
                     {
                       'name': 'Love me like you do',
						'artist': 'ELLie Goulding',
						'album': ' Fifty Shades Of Grey',
						'duration': '4:11',
						'fileName': 'song6.mp3',
						'image': 'song6.jpg'
                     },
                     {
						'name': 'Every Night In My Dream',
						'artist': 'Celine Dion',
						'album': 'Lets talk about Love',
						'duration': '4:39',
						'fileName': 'song7.mp3',
						'image': 'song7.jpg'
					},
                    {
                       'name': 'Let me love you',
						'artist': 'DJ Snake',
						'album': 'Encore',
						'duration': '3:25',
						'fileName': 'song8.mp3',
						'image': 'song8.jpg'
                     }]


var songs_chill = [{
                       'name': 'Rooling in the deep',
					   'artist': 'Adele',
					   'album': 'singles',
						'duration': '3:49',
					   'fileName': 'song9.mp3',
					   'image': 'song9.jpg'
                    },
      
                    {
						'name': 'time after time',
						'artist': 'Cyndi Laupher',
						'album': ' she is so unusual',
						'duration': '4:01',
						'fileName': 'song10.mp3',
						'image': 'song10.jpg'
					},  
                  
                    {
						'name': 'I know you care',
						'artist': 'Ellie Goulding',
						'album': 'Halcyon',
						'duration': '3:27',
						'fileName': 'song12.mp3',
						'image': 'song12.jpg'
					},
                  
                    {
           
						'name': 'We dont talk any more',
						'artist': 'Charlie Puth',
						'album': 'Nine Track Mind',
						'duration': '3:14',
						'fileName': 'song11.mp3',
						'image': 'song11.jpg'
                    }]


        function addSongNameClickEvent(songObj,position) {
				var id = '#song' + position;
				var songName = songObj.fileName;   
				 $(id).click(function() {
			   // console.log("running");
				
				var audio = document.querySelector('audio');
				var currentSong = audio.src;
            
                if(currentSong.search(songName) != -1)
                   {
                     //   console.log(" running next");
                       
                       toggleSong();
                    }
                else {
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                        $('#now-playing').removeClass('run-animation');
                        setTimeout(function(){
                          $('#now-playing').addClass('run-animation');
                        },10);
                        console.log("i'm runn");
                        
                    }
                  });
                 }    


		



				
		function changeCurrentSongDetails(songObj) {
		    $('.current-song-image').attr('src','img/' + songObj.image)
			$('.current-song-name').text(songObj.name)
			$('.current-song-album').text(songObj.album)
		}
	
	
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
		



 function whichPlaylist(){

        if(pop == 1){

            songs = songs_pop;
        }
        else if(chill == 1){
            console.log("chill run");
            songs = songs_chill;
        }

        else if(rock == 1){
            console.log("rock run");
            songs = songs_rock;
        }
        
        else if(alternative == 1){

            songs = songs_alternative;
        }
        
       

        return songs;
    }

	
		  function updateSongList(){
        songs=whichPlaylist();
        console.log(songs[1]);
        for(var i =0; i < songs.length;i++) {
                var songObj = songs[i];
                var name = '#song' + (i+1);
                var song = $(name);
                updateCurrentTime(); 
                setInterval(function() {
                updateCurrentTime();
                },1000);
                song.find('.song-name').text(songObj.name);
                song.find('.song-artist').text(songObj.artist);
                song.find('.song-album').text(songObj.album); // Added
                song.find('.song-length').text(songObj.duration); // Added
                addSongNameClickEvent(songObj,i+1);
       
            }
        songs_table=$('#songs').DataTable({
                    paging:false
                });
                      

    }

 //Trigger Song on click play icon
    $('.play-icon').on('click', function() {
         toggleSong();
    });

    //Trigger spacebar controls
    $('body').on('keypress', function(event) {
                var target = event.target;
                if (event.keyCode == 32 && target.tagName !='INPUT') {
                    toggleSong();
                }
            }); 

    //Trigger Looping   
    $('.fa-repeat').on('click', function(){
        console.log("checked looping");
        willLoop =1-willLoop;
        $('.fa-repeat').toggleClass('disabled');
    });


	 $('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if(currentSongNumber < 4) {
        // Play the next song
        var nextSong = songs[currentSongNumber];
        //console.log(nextSong.filename);
        audio.src = nextSong.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSong);
        currentSongNumber = currentSongNumber+1;
    }
    else {
        // Stop Playing
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
});		


     $('#mood-chill').on('click',function(){
       if(typeof songs_table != 'undefined' ){
          songs_table.destroy();
       }
        chill=1;
        pop=rock=alternative=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });


    $('#mood-rock').on('click',function(){
           if(typeof songs_table != 'undefined'){
            songs_table.destroy();
        } 
        rock=1;
        pop=chill=alternative=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });

    $('#mood-pop').on('click',function(){
         if(typeof songs_table != 'undefined'){
           songs_table.destroy();
        }
        pop=1;
        chill=rock=alternative=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });


    $('#mood-alternative').on('click',function(){
           if(typeof songs_table != 'undefined'){
            songs_table.destroy();
        }
        alternative=1;
        pop=rock=chill=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn');
    });






    $('#back').on('click',function(){

        $('.content').addClass('hidden');
        $('.mood-sorting').removeClass('hidden');
        $('.mood-sorting').addClass('animated zoomIn');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
          song = document.querySelector('audio');
                song.pause();
        
    })

					
	             
				
					
					
					
					
					
					//var songList = ['Starving', 'humma humma', 'Nashe Si Chadh Gayi', 'badri ki dulhaniya']; 
				   // var	fileName = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
					//var artistList = ['neha kakar', 'arjit singh', 'sonu  nigam', 'jubin nautiyal'];
					//var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
					//var durationList = ['2:56','3:15','2:34','2:29'];
					
									
					//addSongNameClickEvent(fileName[0],1);
					//addSongNameClickEvent(fileName[1],2);
					//addSongNameClickEvent(fileName[2],3);
					//addSongNameClickEvent(fileName[3],4);
					
					//for (var i = 0; i < fileName.length ; i++) {
					//addSongNameClickEvent(fileName[i],i+1);
				    //} 
										
					
					
					
					
					          
                        