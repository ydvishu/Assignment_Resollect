import { Table, Input, Select, Button, Form, Checkbox } from 'antd';
import { useState } from 'react';
import { SearchOutlined, FilterOutlined, DownOutlined } from '@ant-design/icons';
import './CandidateList.css';


const { Option } = Select;

const initialDataSource = [
  {
    key: '1',
    LoanNo: 'L28U3243',
    Loantype: 'Home Loan',
    Borrower: 'Vedika Sachar',
    BorrowerAddress: '83 Yogi Ganj, Kadapa -058720',
    CoBorrower1Name: 'Divit Vora',
    CoBorrower1Address: '24/543, Acharya Path Ongoie-052360',
    CurrentDPD: '91',
    SanctionAmount: '1934068',
    Region:'West'   
  },
  {
    key: '2',
    LoanNo: 'L37U5280',
    Loantype: 'Car Loan',
    Borrower: 'Harshita Aggarwal',
    BorrowerAddress: '86 Dev Path, Kadapa -841186',
    CoBorrower1Name: 'Mahika Tak',
    CoBorrower1Address: '23, Telia Road, Sultanpur Majra 919878',
    CurrentDPD: '100',
    SanctionAmount: '1842143',
    Region:'North' 
  },
  {
    key: '3',
    LoanNo: 'L64U9103',
    Loantype: 'Home Loan',
    Borrower: 'Vedika Sachar',
    BorrowerAddress: '83 Yogi Ganj, Kadapa -058720',
    CoBorrower1Name: 'Divit Vora',
    CoBorrower1Address: '24/543, Acharya Path Ongoie-052360',
    CurrentDPD: '91',
    SanctionAmount: '1934068',
    Region:'West' 
  },
  {
    key: '4',
    LoanNo: 'L18U3001',
    Loantype: 'Car Loan',
    Borrower: 'Harshita Aggarwal',
    BorrowerAddress: '86 Dev Path, Kadapa -841186',
    CoBorrower1Name: 'Mahika Tak',
    CoBorrower1Address: '23, Telia Road, Sultanpur Majra 919878',
    CurrentDPD: '100',
    SanctionAmount: '1842143',
    Region:'North' 
  },
  {
    key: '5',
    LoanNo: 'L26U0443',
    Loantype: 'Car Loan',
    Borrower: 'Harshita Aggarwal',
    BorrowerAddress: '86 Dev Path, Kadapa -841186',
    CoBorrower1Name: 'Mahika Tak',
    CoBorrower1Address: '23, Telia Road, Sultanpur Majra 919878',
    CurrentDPD: '100',
    SanctionAmount: '1842143',
    Region:'North' 
  },
  {
    key: '6',
    LoanNo: 'L26U0443',
    Loantype: 'Personal Loan',
    Borrower: 'Harshita Sen',
    BorrowerAddress: '41/42, Dua, Amrorah-741195',
    CoBorrower1Name: 'Vihaan Dua',
    CoBorrower1Address: '23, Telia Road, Sultanpur Majra 919878',
    CurrentDPD: '75',
    SanctionAmount: '2342143',
    Region:'East' 
  },
  {
    key: '7',
    LoanNo: 'L26U6943',
    Loantype: 'Car Loan',
    Borrower: 'Samara Jain',
    BorrowerAddress: '79/10 Barad Jila, Kadapa -841186',
    CoBorrower1Name: 'Chirag Tripathi',
    CoBorrower1Address: '35/11, Bajaj Nagar 504713',
    CurrentDPD: '78',
    SanctionAmount: '1842143',
    Region:'South' 
  },
];

const PortfolioList = () => {
  const [dataSource] = useState(initialDataSource);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(initialDataSource);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isFormModalVisible, setIsFormModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedButton, setSelectedButton] = useState('All'); // Track selected button
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleSearch = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const handleEdit = (candidate) => {
  setSelectedCandidate(candidate);
  form.setFieldsValue(candidate);
  setIsEditMode(true);
  setIsFormModalVisible(true);
};


  const filterData = (searchText) => {
    const filtered = dataSource.filter((entry) =>
      entry.LoanNo.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };
  

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const columns = [
    {
      title: '',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: (_, record) => (
        <div style={{ border: '1px solid black', display: 'inline-block', padding: '2px', borderRadius: '4px' }}>
  <Checkbox
    checked={selectedRowKeys.includes(record.key)}
    onChange={(e) => {
      const newSelectedKeys = e.target.checked
        ? [...selectedRowKeys, record.key]
        : selectedRowKeys.filter((key) => key !== record.key);
      setSelectedRowKeys(newSelectedKeys);
    }}
  />
</div>
      )
    },
    {
      title: 'Loan No.',
      dataIndex: 'LoanNo',
      key: 'LoanNo',
    },
    {
      title: 'Loan Type',
      dataIndex: 'Loantype',
      key: 'Loantype',
    },
    {
      title: 'Borrower',
      dataIndex: 'Borrower',
      key: 'Borrower',    
    },
    {
      title: 'Borrower Address',
      dataIndex: 'BorrowerAddress',
      key: 'BorrowerAddress',
    },
    {
      title: 'Co Borrower 1 Name',
      dataIndex: 'CoBorrower1Name',
      key: 'CoBorrower1Name',
    },
    {
      title: 'Co Borrower 1 Address',
      dataIndex: 'CoBorrower1Address',
      key: 'CoBorrower1Address',
    },
    {
      title: 'Current DPD',
      dataIndex: 'CurrentDPD',
      key: 'CurrentDPD',
    },
    {
      title: 'Sanction Amount',
      dataIndex: 'SanctionAmount',
      key: 'SanctionAmount',
    },
    {
      title: 'Region',
      dataIndex: 'Region',
      key: 'Region',
    }    
  ];

  // Button Labels
  const buttonLabels = [
    'All',
    'Pre Sarfaesi',
    'NPA',
    '13(3) Response',
    'Symbolic Possession',
    'DM Order',
    'Physical Possession',
    'Auctions',
  ];

  return (
    <div>
      {/* Box Content */}
      <div style={{ marginTop: '15px', width: '1045px', height: '50px', marginBottom: '16px' }}>
        {buttonLabels.map((label) => (
          <Button
            key={label}
            type="default"
            onClick={() => setSelectedButton(label)}
            style={{
              backgroundColor: selectedButton === label ? '#1890ff' : 'white',
              color: selectedButton === label ? 'white' : 'black',
              marginRight: '5px',
            }}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Search & Filters */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <Input.Search
          placeholder="Search Loan Number"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          onSearch={handleSearch}
          style={{ width: 300 }}
          enterButton={<SearchOutlined />}
        />

        {/* Right-Aligned Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button type="default" icon={<DownOutlined />}>
            Select Columns
          </Button>

          <Button type="primary" icon={<FilterOutlined />} >
            More Filters
          </Button>
        </div>
      </div>
      
        {/* Selection Count Box */}
        <div style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            marginBottom: '10px',                       
        }}>
        {selectedRowKeys.length} Loans Selected
      </div>

      {/* Data Table */}
      <Table
        scroll={{ y: 340 }}
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default PortfolioList;
