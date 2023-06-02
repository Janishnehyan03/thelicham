import React from 'react';

const authors = [
  {
    id: 1,
    name: 'John Doe',
    image: '/path/to/john-doe-image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialMedia: {
      github: 'https://github.com/johndoe',
      dribble: 'https://dribbble.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      email: 'mailto:johndoe@example.com',
    },
  },
  // Add more authors as needed
];

const Authors = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Authors</h1>
      {authors.map((author) => (
        <div
          key={author.id}
          className="flex flex-col items-center mb-8 bg-gray-100 p-4 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2">{author.name}</h2>
          <img
            src={author.image}
            alt={author.name}
            className="w-32 h-32 rounded-full mb-2"
          />
          <p className="text-center mb-4">{author.description}</p>
          <div className="flex space-x-4">
            {/* Add social media links */}
            {author.socialMedia.github && (
              <a
                href={author.socialMedia.github}
                aria-label="GitHub"
                className="p-2 rounded-md hover:text-violet-400"
              >
                <img
                  src="/social-media/github.svg"
                  alt="GitHub"
                  className="w-4 h-4 fill-current"
                />
              </a>
            )}
            {author.socialMedia.dribble && (
              <a
                href={author.socialMedia.dribble}
                aria-label="Dribble"
                className="p-2 rounded-md hover:text-violet-400"
              >
                <img
                  src="/social-media/dribble.svg"
                  alt="Dribble"
                  className="w-4 h-4 fill-current"
                />
              </a>
            )}
            {author.socialMedia.twitter && (
              <a
                href={author.socialMedia.twitter}
                aria-label="Twitter"
                className="p-2 rounded-md hover:text-violet-400"
              >
                <img
                  src="/social-media/twitter.svg"
                  alt="Twitter"
                  className="w-4 h-4 fill-current"
                />
              </a>
            )}
            {author.socialMedia.email && (
              <a
                href={author.socialMedia.email}
                aria-label="Email"
                className="p-2 rounded-md hover:text-violet-400"
              >
                <img
                  src="/social-media/email.svg"
                  alt="Email"
                  className="w-4 h-4 fill-current"
                />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Authors;
