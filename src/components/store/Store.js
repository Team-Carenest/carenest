export const store = {
    nannyProfiles: [
        {
            name: 'This Nanny',
            profileImage: 'put in a url',
            miniBio: 'mini bio',
            longBio: 'long bio',
            skills: {
                languages: ['English, Spanish'],
                ageGroups: '2 to 4',
            },
            rating: 5,
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
            name: 'This Other Nanny',
            profileImage: 'put in a url',
            miniBio: 'mini bio',
            longBio: 'long bio',
            skills: [],
            rating: 5,
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
            name: 'Some Parent',
            profileImage: 'put in a url',
            miniBio: 'mini bio',
            longBio: 'long bio',
            seeking: [],
            photoGallery: [
                'url string',
                'url string 2'
            ]
        },
        {
            name: 'Some Parent',
            profileImage: 'put in a url',
            miniBio: 'mini bio',
            longBio: 'long bio',
            seeking: [],
            photoGallery: [
                'url string',
                'url string 2'
            ]
        },
    ]
}

// store.nannyProfiles => this will return an array of profile objects
// store.nannyProfiles[0].name => returns "This Nanny"