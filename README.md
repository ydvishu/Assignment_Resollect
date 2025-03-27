# PortfolioList Component

## Deployed Application: https://assignment-resollect.vercel.app/

Overview
## Overview
The `PortfolioList` component is a React-based table that displays loan details and allows users to search for loans by loan number. It utilizes the **Ant Design (AntD) UI framework** and manages state with the `useState` hook.

## Tech Stack & Libraries Used
- **React.js** - Core library for building UI components.
- **Ant Design (AntD)** - UI framework for styling and components such as `Table`, `Input`, `Button`, and `Checkbox`.
- **JavaScript (ES6+)** - Used for logic and state management.

## Component Structure
### State Management
The component maintains the following states:
- `dataSource` - The original list of loan records.
- `filteredData` - The dynamically filtered list based on search input.
- `searchText` - The search query entered by the user.
- `selectedRowKeys` - The selected checkboxes in the table.

### Search Functionality
- `handleSearch(value)`: Updates `searchText` and filters `dataSource` based on the loan number.
- `filterData(searchText)`: Filters `dataSource` where `LoanNo` contains the search text.

### Table & Columns
- Displays loan information, including Loan Number, Borrower, Co-Borrower, Amount, etc.
- Uses the `Table` component from AntD.
- A checkbox column allows row selection.

### UI Components
- **Search Input** (`Input.Search`): Allows users to filter loans by entering a loan number.
- **Buttons** (`Button` from AntD): Used for column selection and additional filters.
- **Checkboxes** (`Checkbox` from AntD): Enables selection of multiple loans.

## Features
- **✅ Live Search**: Filters loans as the user types.
- **✅ Data Table**: Displays loan details in a structured format.
- **✅ Row Selection**: Users can select multiple loans.
- **✅ Pagination**: Automatically manages large datasets.
- **✅ Filters & Actions**: Placeholder for additional filtering options.

## Installation
To install dependencies, run:
```sh
npm install
```

## Usage
To start the application, run:
```sh
npm start
```

## Conclusion
This component provides an interactive way to manage and search loan records efficiently. The integration of Ant Design ensures a responsive and user-friendly experience.

