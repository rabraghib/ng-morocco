import { PageServerLoad } from '@analogjs/router';
import { VideoItem } from '../core/models';

export const DATA = [
  {
    id: 'YATyDJ-f8ag',
    title: 'Signals ',
    description:
      'Back again with a new Angular in Darija live session in this one we will be talking about Signals in Angular.\r\n\r\n* Why do we need Signals?\r\n* Change Detection without Signals\r\n* Reactivity with Signals\r\n* Zonless Angular\r\n* Signals API\r\n* Why not RxJS?\r\n* Interop with RxJS\r\n* Coming features',
    publishedAt: '2023-05-14T07:58:29Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/YATyDJ-f8ag/maxresdefault.jpg',
  },
  {
    id: 'kU7jMkR-ONI',
    title: 'Angular Animations ',
    description:
      'Back again with a new Angular in Darija live session in this one we will be talking about Angular Animations.\r\n\r\n* Animations with CSS\r\n* Transitions in CSS\r\n* How animations work in Angular\r\n* Triggers and States\r\n* query() and stager()\r\n* Controling with Keyframes\r\n* CSS animations vs Angular animations',
    publishedAt: '2022-11-13T18:45:50Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/kU7jMkR-ONI/maxresdefault.jpg',
  },
  {
    id: 'o-bMZ_H3k30',
    title: 'Reactive forms ',
    description:
      'Salam 👏\r\n\r\nBack again with a new Angular in Darija live session, in this one we will be talking about: \r\n- Reactive forms API \r\n- FormControll, formGroup And formArray.\r\n- Simplify building forms with formBuilder.\r\n- Validation and Custom Validators.\r\n- Strict typing in Angular v14.\r\n\r\nWe will pick and answer your questions on the fly.\r\n\r\nHosted by Chihab Otmani and Ilyass Elfouih\r\n\r\nEverything in Darija 🇲🇦\r\n\r\nSpecial thanks to our sponsor thinkster.io',
    publishedAt: '2022-11-01T09:51:00Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/o-bMZ_H3k30/maxresdefault.jpg',
  },
  {
    id: 'X-nQpY9Yuh0',
    title: 'Standalone Components ',
    description:
      'We are back with a new episode about the long-awaited "Standalone components" feature available in v14!\r\n\r\n- Why do/did we need NgModules again?\r\n- What are Standalone Components?\r\n- How to provide services?\r\n- How to use with third party libraries?\r\n- Single File Components\r\n- What are the best strategies to migrate?\r\n- Angular In Darija app migration to SC\r\n- Are Standalone APIs ready for production?\r\n- What is the Future?\r\n\r\nWe will pick and answer attendees\' questions on the fly.\r\n\r\nPresented by\r\n- Chihab Otmani https://twitter.com/chihabotmani\r\n- Ilyas Elfouih https://twitter.com/elfouih\r\n\r\nStay tuned\r\n- Community App: https://angularindarija.dev\r\n- Meetup: https://www.meetup.com/ngmorocco/\r\n- Discord Server: https://bit.ly/ngDiscord\r\n- Youtube Playlist: https://bit.ly/ngDarija',
    publishedAt: '2022-07-04T11:41:51Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/X-nQpY9Yuh0/maxresdefault.jpg',
  },
  {
    id: 'qakPgmlRzVw',
    title: 'Community App #3 ',
    description:
      "In this session we're going to explain the application architecture and design.\n\n- New Design\n- Server Side Rendering\n- Algolia Search\n- Progressive WebApp\n- Coming features\n- Call for contributions\n\nWe will pick and answer your questions on the fly.",
    publishedAt: '2021-09-04T22:56:25Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/qakPgmlRzVw/maxresdefault.jpg',
  },
  {
    id: 'wOUyKuzgohE',
    title: 'Community App #2 ',
    description:
      "Salam 👏\n\nIn this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session, we will continue on building and reviewing contributions from community on our official Angular In Darija application.\n\nJoin the official ngMorocco Community on Discord! 👉 https://bit.ly/ngDiscord\n\nYour contributions are welcome here https://github.com/ngMorocco/ngx-darija.\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nSpecial thanks to our sponsor thinkster.io",
    publishedAt: '2021-08-09T09:52:01Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/wOUyKuzgohE/maxresdefault.jpg',
  },
  {
    id: 'aFjPmxqefXo',
    title: 'Ask Me Anything ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session, we will do an AMA (ask me anything) in angular, a session where you can ask anything about angular in Darija and we will try to answer you.\n\nAt the end of our session, we will do a contest on Kahoot and the winner will have a 1-year subscription on thinkster.io pro plan.\n\nPannel members:\n- Elfouih ilyass\n- Chihab otmani\n- Abderrahim Soubai Elidrissi\n\nSpecial thanks to our sponsor thinkster.io\n\nEverything in Darija 🇲🇦",
    publishedAt: '2021-08-09T09:43:39Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/aFjPmxqefXo/maxresdefault.jpg',
  },
  {
    id: 'qEFIKUuKx-E',
    title: 'Routing and Modules ',
    description:
      "In this session we'll talk about Routing and Modules\n- Introduction to Modules\n- Feature modules with @NgModule\n- Base href and RouterModule\n- Module routes and outlet\n- Wildcard routes\n- Understanding routerLink\n- Route params\n- Changing route from code\n- Lazy loading modules\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih\n\nStackBlitz: https://stackblitz.com/edit/angular-in-darija",
    publishedAt: '2021-08-09T09:43:23Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/qEFIKUuKx-E/maxresdefault.jpg',
  },
  {
    id: 'j2WQJ1awxGQ',
    title: 'Reactive Programming with RxJS ',
    description:
      '# Topics\n- Understanding Streams\n- Observable pattern explained\n- Handling Subscriptions and Errors\n- Using common Operators\n- Building Custom Operators\n- Practical Example from ngx-darija future search story\n- Unicast vs Multicast\n- State Management\n\n# Panel\n- Chihab Otmani https://twitter.com/chihabotmani\n- Ilyas Elfouih https://twitter.com/elfouih\n- Abdellah Iraamane https://twitter.com/abiraamane\n\n# Resources\nBuild your Own RxJS by Chihab\n- Observables: https://dev.to/chihab/build-your-own-rxjs-3edd\n- Observables: https://dev.to/chihab/build-your-own-rxjs-operators-part-2-l89\n\nRxJS operators\n- https://rxjs.dev/guide/operators',
    publishedAt: '2021-08-08T15:19:09Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/j2WQJ1awxGQ/maxresdefault.jpg',
  },
  {
    id: 'ToaZsdRCc0s',
    title: 'Community App #1 ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session, we will continue on building a real-world community application.\n\nYour contributions are welcome here https://github.com/ngMorocco/ngx-darija.\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nJoin the official ngMorocco Community on Discord! 👉 https://bit.ly/ngDiscord\n\nSpecial thanks to our sponsor thinkster.io",
    publishedAt: '2021-03-07T07:20:20Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/ToaZsdRCc0s/maxresdefault.jpg',
  },
  {
    id: 'enRmacchNN4',
    title: "Let's build a Community App ",
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nJoin the official ngMorocco Community on Discord! 👉 https://bit.ly/ngDiscord\n\nIn this session, we will start doing some serious practice by implementing a real-world application.\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦",
    publishedAt: '2020-12-25T08:12:42Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/enRmacchNN4/maxresdefault.jpg',
  },
  {
    id: 'ohIqd44OQeg',
    title: 'Angular CLI ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session, we will be talking about Angular CLI.\n- Angular CLI setup\n- Using npx to install CLI\n- Understand how Node CLIs work\n- Understand angular.json\n- Generating an application\n- Building the application\n- Serving the application\n- Introduction to schematics\n- ng adding some schematic\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nThe event will be Live streamed on Youtube.\n\nSpecial thanks to our sponsor thinkster.io",
    publishedAt: '2020-11-28T23:55:11Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/ohIqd44OQeg/maxresdefault.jpg',
  },
  {
    id: '2pNLLFoZtxs',
    title: 'Template',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session we'll talk about Template-driven Forms\n- Introduction to Forms in Angular\n- ngModel directive\n- Custom directives\n- ngModel behind the scenes\n- ngForm FormGroup and FormControl\n- Form validation and error states\n- Styling validation and errors states\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih\n\nStackBlitz:\nhttps://stackblitz.com/edit/angular-in-darija",
    publishedAt: '2020-10-11T23:12:21Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/2pNLLFoZtxs/maxresdefault.jpg',
  },
  {
    id: 'O5poq2onluI',
    title: 'Http and Observables ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\r\n\r\nIn this session we'll talk about RxJS and HttpClient:\r\n- Data Fetching with Promises\r\n- Introducing Observable pattern\r\n- Reactive Extensions for JavaScript\r\n- Data Fetching with HttpClient\r\n- Mocking the REST API\r\n- Data and Business services\r\n- Introducing and using basic RxJS operators\r\n\r\nWe will pick and answer attendees' questions on the fly.\r\n\r\nEverything in Darija 🇲🇦\r\n\r\nPresented by; \r\n- Chihab Otmani  https://twitter.com/chihabotmani\r\n- Ilyas Elfouih  https://twitter.com/elfouih",
    publishedAt: '2020-10-04T23:45:54Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/O5poq2onluI/maxresdefault.jpg',
  },
  {
    id: 'Ndkf6oVPp3A',
    title: 'Component Architecture ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session we'll talk about Component Architecture:\n- Data Flow and One-way Data Flow\n- Smart and Dumb Components\n- Containers and Presentational Components\n- @Input and @Output\n- Basic Application state management\n- Application Planning\n- Practical Example\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih",
    publishedAt: '2020-09-30T13:25:32Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/Ndkf6oVPp3A/maxresdefault.jpg',
  },
  {
    id: 'q-VUkCtp_Ck',
    title: 'Dependency Injection ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\r\n\r\nIn this session we'll talk about Dependency Injection:\r\n- Understanding DI\r\n- @Injectable\r\n- Providers and useClass\r\n- Basic Authentication Service\r\n- useFactory and useValue\r\n- InjectionToken\r\n\r\nWe will pick and answer attendees' questions on the fly.\r\n\r\nEverything in Darija 🇲🇦\r\n\r\nPresented by; \r\n- Chihab Otmani  https://twitter.com/chihabotmani\r\n- Ilyas Elfouih  https://twitter.com/elfouih",
    publishedAt: '2020-09-22T23:00:31Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/q-VUkCtp_Ck/maxresdefault.jpg',
  },
  {
    id: 'BRovk890YJ0',
    title: 'Directives and Pipes ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session we'll talk about Directives and Pipes:\n- Attribute Directives\n- Structural Directives\n- Pipes\n\nWe didn't have time to make these topics, we'll see them another time inchaAllah\n- Pure pipes\n- Custom Pipes\n- Custom Directives\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih",
    publishedAt: '2020-06-28T14:09:37Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/BRovk890YJ0/maxresdefault.jpg',
  },
  {
    id: 'AGO4mqa7u-8',
    title: 'Component Fundamentals ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nIn this session we'll talk about Component and Templates:\n- Interpolation and expressions\n- Property binding\n- Event binding\n- Two-way binding\n- Template #ref variables\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija 🇲🇦\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih",
    publishedAt: '2020-06-27T23:18:17Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/AGO4mqa7u-8/maxresdefault.jpg',
  },
  {
    id: 'rT0FUs7uUks',
    title: 'Getting Started ',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih",
    publishedAt: '2020-06-14T10:41:41Z',
    thumbnailUrl: 'https://i.ytimg.com/vi/rT0FUs7uUks/maxresdefault.jpg',
  },
];

export const load = async (_: PageServerLoad): Promise<VideoItem[]> => {
  return DATA;
};
