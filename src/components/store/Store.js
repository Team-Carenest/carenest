const nannyLongBio = 'I have been providing childcare services in the Nashville area for over a decade, and have experience caring for children of all ages. I am fluent in English and Spanish, and have a diverse skillset including cooking and creative activities!';
const parentLongBio = 'Hi! I am searching for someone to care for my two children on Tuesday and Thursday nights. My children are Bob, 2, and Mary, 5. Mary has a severe peanut allergy. Please let me know if you are able to help!';

export const store = {
    nannyProfiles: [
        {
            name: 'Maria W. Ament',
            profileImage: '../../media/babysitter.jpg',
            miniBio: 'Offering professional care for 12 years',
            longBio: nannyLongBio,
            city: 'Nashville, TN',
            ZIP: 37214,
            skills: {
                languages: ['English, Spanish'],
                ageGroups: '2 to 4',
            },
            rating: 5,
            price: 50,
            parentFeedback: [
                {
                    parentName: 'Some parent',
                    profilePhoto: 'put in a url',
                    rating: 5,
                    comments: 'These are parent comments'
                },
                {
                    parentName: 'Some parent',
                    profilePhoto: 'put in a url',
                    rating: 5,
                    comments: 'These are parent comments'
                }
            ]
        },
        {
            name: 'Sue R. Vaughn',
            profileImage: '../../media/babsitter3.jpg',
            miniBio: 'libero nunc consequat interdum varius sit amet',
            longBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat.',
            city: 'Murfreesboro, TN',
            ZIP: 37127,
            skills: {
                languages: ['English'],
                ageGroups: 'teenager'
            },
            rating: 5,
            price: 75,
            parentFeedback: [
                {
                    parentName: 'Some parent',
                    profilePhoto: 'put in a url',
                    rating: 5,
                    comments: 'These are parent comments'
                },
                {
                    parentName: 'Some parent',
                    profilePhoto: 'put in a url',
                    rating: 5,
                    comments: 'These are parent comments'
                }
            ]
        },
        {
            name: 'Cathy M. Winters',
            profileImage: 'put in a url',
            miniBio: 'libero nunc consequat interdum varius sit amet',
            longBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat.',
            city: 'Murfreesboro, TN',
            ZIP: 37127,
            skills: {
                languages: ['English'],
                ageGroups: 'teenager'
            },
            rating: 5,
            price: 40,
            parentFeedback: [
                {
                    parentName: 'Some parent',
                    profilePhoto: 'put in a url',
                    rating: 5,
                    comments: 'These are parent comments'
                },
                {
                    parentName: 'Some parent',
                    profilePhoto: 'put in a url',
                    rating: 5,
                    comments: 'These are parent comments'
                }
            ]
        }
    ],
    parentProfiles: [
        {
            name: 'Elsie J. Lopez',
            profileImage: '../../media/FamilyPicture.jpg',
            miniBio: 'Single mom seeking help with two young children',
            longBio: parentLongBio,
            photoGallery: [
                'url string',
                'url string 2'
            ]
        },
        {
            name: 'Mildred G. Vandyne',
            profileImage: '../../media/FamilyPicture2.jpg',
            miniBio: 'vitae congue mauris rhoncus aenean vel elit',
            longBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna. Quis varius quam quisque id diam vel quam elementum.',
            photoGallery: [
                'url string',
                'url string 2'
            ]
        },
        {
            name: 'Kari I. Turner',
            profileImage: '../../media/FamilyPicture3.jpg',
            miniBio: 'vitae congue mauris rhoncus aenean vel elit',
            longBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna. Quis varius quam quisque id diam vel quam elementum.',
            photoGallery: [
                'url string',
                'url string 2'
            ]
        },
    ]
}

// store.nannyProfiles => this will return an array of profile objects
// store.nannyProfiles[0].name => returns "This Nanny"