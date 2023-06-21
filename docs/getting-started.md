---
sidebar_position: 2
---

# Getting started

Welcome to the comprehensive documentation of Aetheria!
This guide will assist you in getting started with our powerful content management system and empower you to create
exceptional websites.
Whether you're a seasoned developer or a content creator, this documentation will provide you with the necessary
resources and knowledge to harness the full potential of Aetheria.

In this Getting Started section, we will walk you through the initial steps of setting up Aetheria, exploring its key
features, and getting your website up and running.
From installation to customization, we'll cover everything you need to know to kickstart your Aetheria journey.

Before diving into the details, make sure you have the necessary prerequisites in place.
Familiarity with web technologies, such as HTML, CSS, and JavaScript, will be beneficial but not mandatory.
Aetheria's intuitive interface and extensive documentation will guide you every step of the way.

## What is Aetheria?

Aetheria is an innovative and powerful content management system (CMS) designed to empower website creators with
limitless possibilities.

It provides a robust platform for building and managing websites, offering advanced features
like an extensible plugin architecture, unparalleled security measures, intuitive content management, responsive design,
and much more features will be added soon.
Aetheria combines innovation, security, and user-friendliness, allowing users to unleash their creativity and deliver
exceptional online experiences.

### Why Aetheria?

Aetheria was created because of the lack of a CMS that is **easy to use**, **secure**, and **powerful** at the same
time.

As Aetheria was created from the ground up using the latest technologies it is easy to maintain, updated, and follows
the latest technologies and security measures.

Many CMSs are either too complicated to use or too simple to be useful. But Aetheria is different. It is designed to be
simple and easy to use, yet powerful and secure.

Let's check some of Aetheria's main competitors:

#### Wordpress

| Pros                                                                                                                                                                                        | Cons                                                                                                                                                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Ease of Use**: WordPress has a user-friendly interface, making it accessible for beginners to create and manage websites without advanced technical knowledge.                            | **Complexity for Customizations**: Customizing WordPress beyond basic themes and plugins often requires coding skills or the help of a developer.                                                                                                                     |
| **Large User and Developer Community**: WordPress has a massive user base and an active developer community, providing extensive resources, tutorials, and support options.                 | **Security Vulnerabilities**: Not secure by default, lacks of most modern attack countermeasures. Regular updates and security measures are crucial to mitigate risks.                                                                                                |
| **Extensive Theme and Plugin Ecosystem**: WordPress offers a vast selection of themes and plugins, allowing users to extend functionality and customize the appearance of their websites.   | **Plugin Compatibility Issues**: Mixing and matching plugins from different developers can sometimes lead to conflicts, compatibility issues, or performance concerns. Most plugins are moreover poorly developed, unmaintained, outdated or vulnerable.              |
| **Flexibility**: WordPress can be used to build various types of websites, including blogs, e-commerce stores, portfolios, business websites, and more.                                     | **Performance Optimization**: Improperly coded themes, excessive plugins, or low-quality hosting can impact WordPress site performance and loading speed, this makes it extremely difficult to optimize and scale. It is mostly impossible to reach SPA performances. |
| **SEO-Friendly**: WordPress provides built-in features and plugins that facilitate search engine optimization, making it easier to optimize your website for better search engine rankings. | **Regular Maintenance**: WordPress requires regular updates for the core software, themes, and plugins to ensure security, performance, and compatibility.                                                                                                            |                                                                                                                                                                                                                                        |
| **Content Management**: WordPress offers a user-friendly content management system, allowing you to easily create, edit, and organize your website's content.                               | **Learning Curve for Advanced Features**: Mastering advanced features, such as custom post types, taxonomies, or creating custom page templates, may require more technical expertise.                                                                                |

#### Wix

| Pros                                                                                                                                                                                                                                        | Cons                                                                                                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **User-Friendly Interface**: Wix provides an intuitive drag-and-drop website builder, making it easy for beginners to create and customize websites without coding knowledge.                                                               | **Limited Design Flexibility**: While Wix offers many design options, customization beyond the provided templates can be challenging compared to more flexible platforms.                     |
| **Wide Range of Design Templates**: Wix offers a vast collection of professionally designed templates across various industries and niches, allowing users to start with a visually appealing foundation.                                   | **Dependency on Wix**: When using Wix, you are tied to their platform, making it challenging to migrate your website to another hosting provider or content management system.                |
| **App Market and Plugins**: Wix has an App Market that offers a selection of plugins and apps to enhance website functionality, allowing users to easily add features such as forms, e-commerce capabilities, and social media integration. | **Advertisements and Branding**: Free Wix websites display Wix ads and branding, which can detract from the professional appearance of your site.                                             |
| **Customer Support**: Wix offers extensive customer support through various channels, including email, phone, and a comprehensive knowledge base, providing assistance to users when needed.                                                | **Cost**: While Wix has a free plan, upgrading to remove limitations and access more features can become costly, especially for users requiring additional functionality or advanced options. |
| **SEO-Friendly Features**: Wix provides built-in SEO tools and features to optimize websites for search engines, including customizable meta tags, URL structures, alt tags for images, and more.                                           | **Data Portability**: Exporting website content and data from Wix can be challenging, which may complicate the process of migrating to a different platform in the future.                    |

#### Strapi

| Pros                                                                                                                                                                             | Cons                                                                                                                                                                                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Headless CMS**: Strapi is a flexible headless CMS, which means you can use it to manage content for various front-end frameworks or mobile applications.                       | **Learning Curve**: Strapi has a learning curve, especially for users who are new to headless CMS or backend development.                                                                    |
| **Customization**: Strapi allows extensive customization, enabling developers to tailor the CMS to their specific project needs.                                                 | **Technical Expertise**: Building and customizing a Strapi instance may require technical expertise and familiarity with backend development.                                                |
| **RESTful and GraphQL APIs**: Strapi provides both RESTful and GraphQL APIs out of the box, giving developers flexibility in choosing the API approach that suits their project. | **Performance Considerations**: Depending on the complexity and scale of your project, you may need to optimize and fine-tune Strapi's performance to handle high traffic or large datasets. |
| **Open-Source**: Strapi is an open-source CMS, providing access to its source code, allowing for community contributions, and fostering an active developer community.           | **Security**: Strapi is not secure by default, and it is your responsibility to ensure that your Strapi instance is secure.                                                                  |
| **Content Management**: Strapi offers a user-friendly content management system, allowing you to easily create, edit, and organize your website's content.                       | **Regular Maintenance**: Strapi requires regular updates for the core software and plugins to ensure security, performance, and compatibility.                                               |

## Aetheria's solution

Aetheria's goal is to solve the main problem of all its competitors and improve on the usability and security of the
overall CMS. How?

Let's address the main problems of the competitors one by one:

- **Plugins security and compatibility**: Aetheria's plugins can be developed by anyone but *- for plugins to get listed
  on the
  official marketplace -* each plugin is reviewed by the Aetheria's team to ensure that it is secure and compatible with
  the latest version of the CMS.
  Additionally, plugins:
	- Are analyzed in order to extract a permission list that the user can review before installing the plugin.
	- Are analyzed in order to extract a list of the plugin's hooks it attaches to.
	- Are analyzed in order to extract a list of security sensitive operations they are likely to perform.
- **Performance**: Aetheria's is a 2 tier CMS, meaning that it is composed of a headless-backend and a frontend.
  The backend is a headless CMS, meaning that it is only responsible for managing the content and exposing it through an
  API.
  The frontend is a SPA (Single Page Application) that consumes the API and renders the content.
  This architecture allows for a much better performance than the traditional CMSs.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site,
you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to
view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
