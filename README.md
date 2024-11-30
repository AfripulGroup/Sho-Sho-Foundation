- [Sho Sho Foundation Website](#sho-sho-foundation-website)
  - [Overview](#overview)
  - [Project Structure](#project-structure)
  - [Features](#features)
    - [1. **Responsive Design**](#1-responsive-design)
    - [2. **Event \& Donation Functionality**](#2-event--donation-functionality)
    - [3. **Dynamic Content**](#3-dynamic-content)
    - [4. **Social Media Integration**](#4-social-media-integration)
    - [5. **Modals \& Toasts**](#5-modals--toasts)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Run the Project](#2-run-the-project)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)


# Sho Sho Foundation Website

## Overview
The **Sho Sho Foundation** website is designed to empower communities and transform lives by providing an online platform for donations, events, and information sharing. This project is built with a clean and interactive user interface and is developed using **HTML**, **CSS**, **JavaScript**, **Tailwind CSS**, **Bootstrap**, and other modern web technologies.

## Project Structure

- **Frontend**: The user interface is responsive, featuring pages like *Home*, *About*, *Gallery*, *Contact Us*, and *Donation*. The site is designed to be interactive, with animations, transitions, and a focus on user engagement.
- **Backend**: The project integrates with **EmailJS** for email functionality (such as sending a confirmation email for donations and event notifications), and **PayPal Giving Fund** for donation processing.

## Features

### 1. **Responsive Design**
   - The website is fully responsive, offering optimized views on desktop, tablet, and mobile devices.
   - It uses **Tailwind CSS** and **Bootstrap** to ensure the layout adjusts to different screen sizes.

### 2. **Event & Donation Functionality**
   - A dedicated **Donation** page where users can contribute to the foundation’s cause.
   - Email notifications sent upon form submission using **EmailJS** (e.g., for confirmation emails after donation).
   - **PayPal Giving Fund** integration for processing donations.

### 3. **Dynamic Content**
   - **Gallery** page showcasing past events, images, and memories.
   - **FAQ** section with an accordion-style dropdown to answer common questions about donations and the foundation's operations.

### 4. **Social Media Integration**
   - The website includes **social sharing meta tags** and **JSON-LD structured data** to enhance SEO and social media sharing.
   - **Social Media Links** to platforms like Facebook, Twitter, Instagram, and LinkedIn.

### 5. **Modals & Toasts**
   - Toast notifications powered by **Toastify.js** for form submission confirmations.
   - Modals for interactive user alerts or donation notifications.

## Technologies Used
- **Frontend**:
  - HTML, CSS (Tailwind CSS)
  - JavaScript (for interactivity)
  - Font Awesome (for icons)
  - AOS (for scroll animations)
  - Splide.js (for carousels)
  - EmailJS (for email functionality)
  - Google Sheets (for subscription email record keeping)
  - PayPal Giving Fund API (for donation processing)

- **Backend**:
  - EmailJS for handling email notifications.
  - Google Sheets for handling get and ost subscriber emails

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/AfripulGroup/Sho-Sho-Foundation
```

### 2. Run the Project
- Open the project in your text editor.
- Make sure a live previewer is installed
- Right click in any html file and launch with previewer

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Special thanks to [**Afripul Group**](https://afripulgroup.com) for the design and development assistance.
- Thanks to **PayPal Giving Fund** for supporting nonprofit fundraising.

