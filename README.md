# Veage

Veage is a small project activity tracker, primarily designed for small teams and companies that experienced troubles in project management during COVID-19.

Backend code repo: [veage_be](https://github.com/vladimirsiv/veage_be)

# Motivation

Many small teams and companies found themselves surprised when COVID-19 pandemic started and lockdown began. They were forced to move everything online, from everyday conversations and meetings to activity tracking and project development which put a lot of pressure on organizational structure.  
Making this change shouldn't be a problem, since there are hundreds of thousands of different platforms and applications that have everything in one place, but somehow they rather use GoogleSheets than a specialized management application. I believe that this is partly due to overwhelming look of modern management applications, thousands of features and guides to set up basic things, but also high prices and time it takes to do research, pick a trusted application, learn how to use it, show other colleagues etc.  
GoogleSheets at first seems like a quickest and easiest solution but as the time passes 3 spreadsheets turn into 300 spreadsheets and basic analysis becomes time-consuming and unnecessarily complicated (not to mention unstructured data, malformatted inputs, poor overview etc.)

In this hobby project, I've tried to create a really small and simple application that acts like a spreadsheet but makes everything easier.

# Features

- User control and privileges: administrator, moderator, user
- Project state control
- Project activity types
- Teams
- Detailed activity information
- Extensive overview, filters, exports...
- Metrics and graphs

If you are interested in how it looks, see [screenshots](https://imgur.com/a/foveIgQ).

# Technologies

- Frontend: [React Admin](https://github.com/marmelab/react-admin)
- Backend: [Express](https://github.com/expressjs/express) with MySQL [Sequelize](https://github.com/sequelize/sequelize/)
- Authentication: In-memory JWT access token with refresh endpoints
- Graphs: [nivo](https://github.com/plouc/nivo)

## License

MIT
