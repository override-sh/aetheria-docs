---
sidebar_position: 5
---

# Configuration

In this section, we will explore how to customize and configure Aetheria to suit your specific needs.
Aetheria offers a flexible and straightforward configuration process, empowering you to tailor the CMS according to your
requirements.

## Initial setup and configuration options

Aetheria allows for most configuration options to be set via environment variables.
This approach provides flexibility and simplifies the management of configuration settings.
By defining environment variables, you can customize various aspects of Aetheria, such as database connection settings,
security options, storage configurations, and more.
Detailed guidance on the specific environment variables and their corresponding configuration options are defined in
their own modules throughout the documentation.

## Database setup and connection

Aetheria simplifies the initial database setup process by leveraging MongoDB as the default database.
With MongoDB's ease of use and scalability, you can seamlessly integrate Aetheria with an existing MongoDB instance or
set up a new one.

Since Aetheria utilizes MongoDB, you can bypass the hassle of additional database setup steps and get straight to
building and managing your website's content.

To streamline the process of populating your Aetheria instance with initial content, we provide a convenient way to seed
your database.
By utilizing the customizable `aetheria.seed.json` file, you can define the structure and content of your
initial database entries.
This allows for efficient data seeding, whether you are starting a new project or migrating an existing website to
Aetheria.
We will guide you through the configuration and usage of the `aetheria.seed.json` file, enabling you to set up your
desired initial content effortlessly.
