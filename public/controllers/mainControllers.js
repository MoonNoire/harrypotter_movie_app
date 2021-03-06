angular.module("app").controller("mainController",function($scope){
	$scope.movies = [
		{ 
		    title : "Harry Potter and the Philosopher's Stone ",
		    episode_number : "1",
		    main_characters : ["Harry Potter", "Hermione granger", "Ron Weasley", "Albus Dumbledore", "Rubeus Hagrid"],
		    description : "Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
		    poster : "harry_potter_episode_1_poster.jpg",
		    hero_image : "harry_potter_episode_1_hero.jpg"
		  },

		  {
		    title : "Harry Potter and the Chamber of Secrets ",
		    episode_number : "2",
		    main_characters : ["Harry Potter", "Hermione granger", "Ron Weasley", "Albus Dumbledore", "Rubeus Hagrid"],
		    description : "The follow-up to Harry Potter and the Sorcerer's Stone finds young wizard Harry Potter and his friends, Ron and Hermione , facing new challenges during their second year at Hogwarts School of Witchcraft and Wizardry as they try to discover a dark force that is terrorizing the school.",
		    poster : "harry_potter_episode_2_poster.jpg",
		    hero_image : "harry_potter_episode_2_hero.jpg"
		  },

		  {
		    title : "Harry Potter and the Prisoner of Azkaban",
		    episode_number : "3",
		    main_characters : ["Harry Potter", "Hermione granger", "Ron Weasley", "Albus Dumbledore", "Rubeus Hagrid"],
		    description : "Harry Potter's third year at Hogwarts starts off badly when he learns deranged killer Sirius Black (Gary Oldman) has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's cat torments Ron's sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?",
		    poster : "harry_potter_episode_3_poster.jpg",
		    hero_image : "harry_potter_episode_3_hero.jpg"
		  },

		  {
		    title : "Harry Potter and the Goblet of Fire ",
		    episode_number : "4",
		    main_characters : ["Harry Potter", "Hermione granger", "Ron Weasley", "Albus Dumbledore", "Rubeus Hagrid"],
		    description : "Part IV in George Lucas' epic, Star Wars: A New Hope opens with a Rebel ship being boarded by the tyrannical Darth Vader. The plot then follows the life of a simple farm boy, Luke Skywalker, as he and his newly met allies (Han Solo, Chewbacca, Obi-Wan Kenobi, C-3PO, R2-D2) attempt to rescue a Rebel leader, Princess Leia, from the clutches of the Empire. The conclusion is culminated as the Rebels, including Skywalker and flying ace Wedge Antilles make an attack on the Empire's most powerful and ominous weapon, the Death Star.",
		    poster : "harry_potter_episode_4_poster.jpg",
		    hero_image : "harry_potter_episode_4_hero.jpg"
		  },

		  {
		    title : "Harry Potter and the Order of the Phoenix",
		    episode_number : "5",
		    main_characters : ["Harry Potter", "Hermione granger", "Ron Weasley", "Albus Dumbledore", "Rubeus Hagrid"],
		    description : "The Order of the Phoenix, a secret organization founded by Albus Dumbledore, informs Harry Potter that the Ministry of Magic is oblivious to Lord Voldemort's return. At the Order's headquarters, Harry's godfather, Sirius Black, mentions that Voldemort is after an object he did not have during his previous attack.",
		    poster : "harry_potter_episode_5_poster.jpg",
		    hero_image : "harry_potter_episode_5_hero.jpg"
		  },

		  {
		    title : "Harry Potter and the Half-Blood Prince",
		    episode_number : "6",
		    main_characters : ["Harry Potter", "Hermione granger", "Ron Weasley", "Albus Dumbledore", "Rubeus Hagrid"],
		    description : "Coming soon...",
		    poster : "harry_potter_episode_6_poster.jpg",
		    hero_image : "harry_potter_episode_6_hero.jpg"
		 }
	];


    $scope.clearFilter = function(){ 
    	
        $scope.letters = undefined;
        if($scope.letters == undefined){
        	jQuery(".clearFilter").fadeOut();
        } 
    };
   







});