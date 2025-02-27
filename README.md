
## Dependencies

- React
- React Router DOM
- Tailwind CSS
- Lucide React
- React Slick
- Other dependencies can be found in package.json
- Additional dependencies: Axios, Redux Toolkit

## Features and Implementation Details

### User Profile Management## Running the Backend

## Dashboard Preview

![Dashboard Preview](https://res.cloudinary.com/dnjcu5zlk/image/upload/v1740633032/Dashbord.png)
  
## Preview


  
![Settings Preview](https://res.cloudinary.com/dnjcu5zlk/image/upload/v1740632602/shoes.png)

## Installation

```sh
git clone https://github.com/ashish4824/Soar.git
cd Soar
npm install
npm run dev
```

To start the backend server, use the following command:

```bash
npm run start
```
To start the complete application, use the following command:

```bash
npm run dev
```


### User Profile Management

- Comprehensive form validation for user details
- Profile picture upload functionality
- Input validation for:
  - Name (letters and spaces only)
  - Username (alphanumeric and underscores)
  - Email (standard email format)
  - Password (minimum security requirements)
  - Date of Birth (with age verification)
  - Address information
  - Postal code (US format)
- Enhanced user experience with real-time validation feedback

### Dashboard
- Lazy-loaded components for optimal performance
- Interactive charts for financial data visualization
- Quick transfer functionality with user carousel
- Recent transactions display
- Credit card management
- User-friendly interface with responsive design
- Integration of third-party APIs for real-time data

## Browser Support

The application is compatible with all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The project uses:
- React for the UI framework
- React Router for navigation
- Tailwind CSS for styling
- Lazy loading for improved performance

## Assumptions

1. The application assumes a US-based user base (postal code format, address format)
2. Minimum age requirement of 13 years for user registration
3. Users have modern browsers with JavaScript enabled
4. Profile pictures are stored and served from a local directory
5. The application requires authentication (implementation not shown in provided code)

## Future Improvements
1. Add multi-language support
2. Implement proper backend integration
3. Add more sophisticated error handling
4. Implement proper state management (e.g., Redux or Context API)
5. Add unit and integration tests
6. Implement proper image upload with backend storage
7. Add dark mode support
8. Enhance accessibility features for better user experience


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
