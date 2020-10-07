// sign up a new user --> data to be taken
const sign_up_of_new_user = {
    username: "shahpreetk",
    user_full_name: "Preet Shah",
    user_email: "shahpreetk@gmail.com",
    user_discord_name: "preet#2843", // optional
    user_passsword: "---string value here---",
    user_confirm_password: "---string value here---"
}


/*
"user_passsword": "string", "user_confirm_password": "string", fields to hash the password and save it in the database.

Also, a unique "user_id": "string", will be generated once user registers successfully.It can be the same id as of MongoDB document object id.

user_id: "1394409", //new user_id generated
*/

// after sign up, each user object will look like this
const user_object_for_each_id_after_sign_up = {
    1394409: {
        username: "shahpreetk",
        user_full_name: "Preet Shah",
        user_email: "shahpreetk@gmail.com",
        user_discord_name: "preet#2843",
    },

    1468728: {
        username: "bunny123",
        user_full_name: "Phineas",
        user_email: "phineas@gmail.com",
        user_discord_name: "phineas#5167",
    }
}

// Login a signed up user
// list of data to be taken from user to login him/her
const user_login = {
    user_email: "shahpreetk@gmail.com",
    user_passsword: "---string value here---" //to be mapped with the hashed value in db
}

// Register for a track

// Initially all tracks will be false by default. When user registers a track, false --> true.
// mapping to be done via user_id that was generated

const user_registered_tracks_list = {
    1394409: {
        is_registered_frontend: true,
        is_registered_backend: false
    },

    1468728: {
        is_registered_frontend: false,
        is_registered_backend: false
    }
}

// Frontend track

const users_registered_frontend = {
    1394409: {
        level_basic: {
            video_1: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55, // to be taken from youtube api
                mark_as_completed: false, // user self-marks this. by default it will be false and once user marks, it'll become true
            },
            video_2: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            video_3: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            is_atleast_half_of_total_completed = false, //this will be used to generate certificate and can be checked by adding mins_watched_by_user of all 3 videos and then checking if it is at least 1/2(half) of total_duration_of_video_in_mins of all 3 videos
        },
        level_intermediate: {
            video_1: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55, // to be taken from youtube api
                mark_as_completed: false, // user self-marks this. by default it will be false and once user marks, it'll become true
            },
            video_2: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            video_3: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            is_atleast_half_of_total_completed = false, //this will be used to generate certificate and can be checked by adding mins_watched_by_user of all 3 videos and then checking if it is at least 1/2(half) of total_duration_of_video_in_mins of all 3 videos
        },
        level_advanced: {
            video_1: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55, // to be taken from youtube api
                mark_as_completed: false, // user self-marks this. by default it will be false and once user marks, it'll become true
            },
            video_2: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            video_3: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            is_atleast_half_of_total_completed = false, //this will be used to generate certificate and can be checked by adding mins_watched_by_user of all 3 videos and then checking if it is at least 1/2(half) of total_duration_of_video_in_mins of all 3 videos
        }
    },
}

// Same schema for backend

const users_registered_backend = {
    1394409: {
        level_basic: {
            video_1: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55, // to be taken from youtube api
                mark_as_completed: false, // user self-marks this. by default it will be false and once user marks, it'll become true
            },
            video_2: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            video_3: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            is_atleast_half_of_total_completed = false, //this will be used to generate certificate and can be checked by adding mins_watched_by_user of all 3 videos and then checking if it is at least 1/2(half) of total_duration_of_video_in_mins of all 3 videos
        },
        level_intermediate: {
            video_1: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55, // to be taken from youtube api
                mark_as_completed: false, // user self-marks this. by default it will be false and once user marks, it'll become true
            },
            video_2: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            video_3: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            is_atleast_half_of_total_completed = false, //this will be used to generate certificate and can be checked by adding mins_watched_by_user of all 3 videos and then checking if it is at least 1/2(half) of total_duration_of_video_in_mins of all 3 videos
        },
        level_advanced: {
            video_1: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55, // to be taken from youtube api
                mark_as_completed: false, // user self-marks this. by default it will be false and once user marks, it'll become true
            },
            video_2: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            video_3: {
                video_url: "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
                total_duration_of_video_in_mins: 1.00,
                mins_watched_by_user: 0.55,
                mark_as_completed: false,
            },
            is_atleast_half_of_total_completed = false, //this will be used to generate certificate and can be checked by adding mins_watched_by_user of all 3 videos and then checking if it is at least 1/2(half) of total_duration_of_video_in_mins of all 3 videos
        }
    },
}


// API(maybe) & Frontend Routes

/*

sign up a new user => /signup

login a new user => /login

all tracks page => /tracks --> this will be default homepage just after sign up or login or for a not logged-in user (this might get changed)

after a logged-in user registers for a course => /track/:track-name --> protected route(user should be logged-in and reegistered for the course to access this route)

particular video in a track => /track/:track-name/:level/:video-number

track-name: frontend, backend
level: level_basic, level_intermediate, level_advanced
video-number: video_1, video_2, video_3

*/