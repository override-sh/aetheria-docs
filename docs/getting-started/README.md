---
sidebar_position: 1
---

# Getting started

Welcome to the Aetheria "Getting Started" Documentation!

This guide is your gateway to unlocking the full potential of Aetheria, a powerful and extensible content management
system (CMS).
Whether you're a beginner or an experienced developer, this documentation will provide you with the essential knowledge
to get up and running with Aetheria in no time.

In this guide, you will learn how to install Aetheria, configure its settings, and explore its user-friendly interface.
We will walk you through the process of creating and managing content, customizing your website's appearance and
extending functionality through plugins.

Discover advanced features such as custom post types, taxonomies, and custom page templates, allowing you to tailor your
website precisely to your needs.
We'll also cover important topics like security best practices, performance optimization, troubleshooting, and upgrading
Aetheria.

Whether you're a blogger, business owner, or developer, Aetheria provides the tools and flexibility to create stunning
websites that engage and captivate your audience.
Let's dive in and embark on an exciting journey with Aetheria!

:::note
If you encounter any challenges along the way, our dedicated support channels and community forums are here to
assist you. Now, let's get started and unleash the potential of Aetheria!
:::

## Brief overview of Aetheria's features and benefits

Aetheria is an innovative and powerful content management system (CMS) designed to empower website creators with
limitless possibilities.
Let's try to summarize its key features and benefits:

- **Robust Platform**: Aetheria offers a solid foundation for building and managing websites, providing advanced
  features such as an extensible plugin architecture, intuitive content management, and responsive design.
- **Enhanced Security**: Aetheria prioritizes security by following the latest technologies and standards.
  The CMS undergoes regular security reviews, and plugins listed on the marketplace are carefully reviewed for security
  and compatibility.
- **Exceptional Performance**: Aetheria adopts a two-tier architecture, with a headless backend for content management
  and a frontend powered by [Next.js](https://nextjs.org/).
  This setup ensures excellent performance and scalability, allowing for the frontend to be hosted on a CDN for optimal
  speed.
- **Customization and Design Flexibility**: With Aetheria, you have the freedom to customize your website's frontend
  using any framework or opt for the default one.
  The built-in block editor, powered by [GrapeJs](https://grapesjs.com/), offers extensive flexibility and customization
  options for content creation.
- **Extensive Plugin Ecosystem**: Aetheria's marketplace provides a wide range of plugins developed by the community.
  Each plugin undergoes a review process to ensure security and compatibility with the latest version of the CMS.
- **User-Friendly Interface**: Aetheria is designed to be simple and easy to use, making it accessible for beginners
  while offering powerful features for advanced users.
  Its intuitive dashboard and content management system streamline the website creation and editing process.
- **Future Plans**: Aetheria is continuously evolving, with plans to introduce a plugin sandbox for enhanced security,
  plugin marketplace, on premise installation, migrators and much much more.

Experience the innovation, security, and flexibility of Aetheria as you create exceptional online experiences.
Unleash your creativity and build websites that stand out with Aetheria's feature-rich CMS.

## Aetheria's headless base installation

Aetheria's base installation is a headless CMS that provides a robust foundation for building and managing websites.

As the plugin system is designed to be modular and performant, leveraging Nest.js' dependency injection system, the
base installation is pretty minimal and includes only a few essential plugins.

Basically the whole CMS is built around:

- Two models:
	- `User`: The user model is used to authenticate users and let them manage templates. <sup>1</sup>
	- `Template`: The template model is used to store templates. Templates are by default used to render pages with a
	  one-to-one mapping. <sup>2</sup>
- One plugin:
	- `@aetheria/plugin-tailwind-classes-builder`: This plugin provides a way to build Tailwind classes from a
	  `Template`.
- The cli:
	- `@aetheria/cli`: The cli is used to manage the CMS as a whole, it provides commands to compile local plugins, seed
	  the database, install additional plugins and upgrade the one already installed and much more.

An additional example plugin (`@aetheria/plugin-example`) is provided to showcase how to extend the CMS.

:::info
<details>
<summary>User <sup>1</sup></summary>

The `User` model do not provide any role management by default, permissions are managed by dedicated plugins.

</details>
<details>
<summary>Template <sup>2</sup></summary>

The `Template` model is used to render pages by default, but it can be used to render anything, like
articles, products, etc.

Templates are not limited to one-to-one mapping, but it is the default behavior, they can be also used as partials for
layouts or themes, or they can be extended to provide more complex behaviors.

</details>
:::

## Aetheria's frontend base installation

Aetheria's frontend base installation is a Next.js application that provides a robust foundation for building and
managing websites.

As no dependency injection capabilities are provided by Next.js, the same approach used by the backend is not possible,
so the frontend base installation is a bit more complex than the backend one.

Basically the whole frontend is built around:

- A React context provider:
	- `IocProvider`: This provider is used to provide the dependency injection capabilities to the frontend.
	  Under the hood it uses [awilix](https://github.com/jeffijoe/awilix) to provide the dependency injection
	  capabilities.
- Two main react hooks:
	- `useIoc`: This hook is used to retrieve the dependency injection container from the `IocProvider`. <sup>1</sup>
	- `useInject` / `useSafeInject`: These hooks are used to inject pluggable components from the dependency injection
	  container. <sup>2</sup>
- A few pluggable fragments:
	- `@aetheria/frontend-utility`: This fragment provides utility methods to the frontend.
	  It must be injected because it provides a few methods that are used by the other fragments.
	- `@aetheria/hooks`: This fragment provides many hooks to the frontend.
	  It must be injected because it provides a few hooks that are used by the other fragments.
	- `@aetheria/components`: This fragment provides all the substitutable components to the frontend.

:::info
<details>
<summary>useIoc <sup>1</sup></summary>

The `useIoc` hook is used to retrieve the dependency injection container from the `IocProvider`.

It should not be used to inject pluggable components, but only to retrieve the container and register new
components/fragments or override existing ones.

</details>
<details>
<summary>useInject / useSafeInject <sup>2</sup></summary>

The `useInject` hook will throw an error if the component is not found in the container, while the `useSafeInject` hook
will return `undefined` instead.

Consider using `useSafeInject` when you are not sure if the component is registered in the container or if the
registration is done asynchronously.
Prefer `useInject` in all other cases.

Consider using the React components `<Suspense />` and `<ErrorBoundary />` to handle the errors thrown by `useInject`
and `useSafeInject`.

</details>
:::
