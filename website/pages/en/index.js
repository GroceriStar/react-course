/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('LOGO1.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);
const MainPage = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>

        <div className = "tableofcontents">

      </div>


  </div>
);
const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Table of contents</h2>
        <div className = "tableofcontents">

          <ul>
<li><a href="/react-course/docs/tutorial/tutorial.html">Tutorial</a>
<ul>
<li><a href="/react-course/docs/tutorial/intro.html">Intro</a></li>
<li><a href="/react-course/docs/tutorial/part-0.html">Main task</a></li>
<li><a href="/react-course/docs/tutorial/part-1.html">Part 1</a></li>
<li><a href="/react-course/docs/tutorial/part-2.html">Part 2</a></li>
<li><a href="/react-course/docs/tutorial/part-3.html">Part 3</a></li>
<li><a href="/react-course/docs/tutorial/part-4.html">Part 4</a></li>
<li><a href="/react-course/docs/tutorial/part-5.html">Part 5</a></li>
<li><a href="/react-course/docs/tutorial/part-6.html">Part 6</a></li>
<li><a href="/react-course/docs/tutorial/part-7.html">Part 7</a></li>
<li><a href="/react-course/docs/tutorial/part-8.html">Part 8</a></li>
<li><a href="/react-course/docs/tutorial/part-9.html">Part 9</a></li>
<li><a href="/react-course/docs/tutorial/part-10.html">Part 10</a></li>
<li><a href="/react-course/docs/tutorial/part-11.html">Part 11</a></li>
<li><a href="/react-course/docs/tutorial/part-12.html">Part 12</a></li>
<li><a href="/react-course/docs/tutorial/part-13.html">Part 13</a></li>
<li><a href="/react-course/docs/tutorial/part-14.html">Part 14</a></li>
<li><a href="/react-course/docs/tutorial/part-15.html">Part 15</a></li>
</ul></li>
<li><a href="/react-course/docs/default-tasks/default-tasks.html">Deafaul tasks</a>
<ul>
<li><a href="/react-course/docs/default-tasks/add-meal-form.html">Add Meal Form</a></li>
<li><a href="/react-course/docs/default-tasks/bitsrc-io.html"> Bitsrc.io</a></li>
<li><a href="/react-course/docs/default-tasks/calendar.html">Calendar</a></li>
<li><a href="/react-course/docs/default-tasks/codacy.html">Codacy</a></li>
<li><a href="/react-course/docs/default-tasks/complex-recipe.html">Complex recipe</a></li>
<li><a href="/react-course/docs/default-tasks/config-data.html">Config data</a></li>
<li><a href="/react-course/docs/default-tasks/dotenv-configuration.html">DotEnv configuration</a></li>
<li><a href="/react-course/docs/default-tasks/flow.html">Flow</a></li>
<li><a href="/react-course/docs/default-tasks/get-data-from-fetch-plugin.html">Get data from fetch-plugin</a></li>
<li><a href="/react-course/docs/default-tasks/git-tutorial.html">Git tutorial</a></li>
<li><a href="/react-course/docs/default-tasks/kiss.html">KISS</a></li>
<li><a href="/react-course/docs/default-tasks/meal-plan.html">Meal Plan</a></li>
<li><a href="/react-course/docs/default-tasks/netlify.html">Netlify</a></li>
<li><a href="/react-course/docs/default-tasks/phoenix-startup.html">Phoenix startup</a></li>
<li><a href="/react-course/docs/default-tasks/project-strucutre.html">Project strucutre</a></li>
<li><a href="/react-course/docs/default-tasks/render-meals.html">Render meals</a></li>
<li><a href="/react-course/docs/default-tasks/routing.html">Routing</a></li>
<li><a href="/react-course/docs/default-tasks/styles.html">Styles</a></li>
<li><a href="/react-course/docs/default-tasks/tests.html">Tests</a></li>
<li><a href="/react-course/docs/default-tasks/travis.html">Travis</a></li>
<li><a href="/react-course/docs/default-tasks/warnings.html">Warnings</a></li>
</ul></li>
</ul>

      </div>


  </div>
);
const FeatureCallout2 = props => (

  <div className = "ogg" style={{textAlign: 'left'}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
          <div className="blockImage">
            <img src="/recipe-app-react-native/img/54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png">

            </img>
          </div>
          <div className="blockContent"><h2><div><span><p>Description</p>
    </span></div></h2><div><span><p>




      </p>
    </span></div></div></div>
      </div>
    </div>
  </div>
);
const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Release #1 completed(Free Menu) ^ Build with: Angular, Ionic Framework v.1 Note: soon I’ll redo an app from scratch.',
        image: imgUrl('54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
           {/* <TryOut /> */}

          <MainPage />
          <FeatureCallout />

           {/* <LearnHow /> */}

          {/* <Description />  */}
           {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
