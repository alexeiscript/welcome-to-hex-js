const { Router } = require('express')

const profile = Router()

profile.get('/', (response) => {
  response.send({
      user: {
        profilePic:
          'https://image.flaticon.com/icons/svg/166/166345.svg',
        name: 'Alexei Stavila',
        position: 'Junior Front End Developer',
        industry: 'Media'
      },
      project: `I have worked on a few projects recently and the one I'm particularly proud of is the website I built
        for a London-based business, called J Cargo LTD. It's a simple one page website which I built from scratch, both
        design and development, while working from home as a freelancer.
        The main reason I'm proud of this project is because it was my first working product delivered to a client, a product
        which I built totally on my own, without any help (well, except google :D) and which the client was satisfied with.
        I have to say it was quite a challenging project, as simple as it may seem, because I became confused at every stage,
        not knowing what approach to take, and since there was no one to guide me, I had to figure everything out on my own.
        Another challenge was liaising with the client. Since I was developing the website for them, I was not quite free to 
        let my imagination roam and build the website however I wanted. Instead I constantly checked with the client all the
        aspects as development went on, in order to build the product strictly according to client's requirements. 
        In the end I managed to successfuly complete the project and I'm proud and happy that it's having a positive impact
        on the client's business.`,
      description: `As a junior developer, I may not have a lot of professional experience, but I really want to practically 
        explore and experience my potential by delivering the best services to the company. It will be a great pleasure to work 
        at HexTransforma. I am quite flexible and I can adapt to various situations to successfully complete the 
        assigned tasks by giving 100% result. So, my presence at HexTransforma will surely be beneficial for myself and the 
        organization.`,
    },
  )
})

module.exports = profile
