import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  Row,
  Col,
} from 'antd';
 

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const InternshipForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'50px' ,marginTop:'20px'}}>
      <Form
        style={{
          maxWidth: 800,
          width: '100%',
          padding: '20px',
          border: '1px solid #f0f0f0',
          borderRadius: '8px'
        }}
        onFinish={(values) => {
          console.log('Received values of form: ', {values});
        }}
        onFinishFailed={(failedvalues) => {
          console.log({failedvalues})
        }}
      >
        {/* Enter your full name here */}
        <Form.Item 
        name={"fullname"} 
        label="Fullname" 
        required
        rules={[
          {
              required: true,
              message: 'Please Enter Your Name!',
          },
          {
            whitespace: true
          },
          {
            min: 3
          }
        ]}
        hasFeedback
        >
          <Input />
        </Form.Item>

        {/* email and phone number */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item 
            name={"email"} 
            label="Email"
            required
            rules={[
              {
                  required: true,
                  message: 'Please Enter Your Name!',
              },
              {
                type: 'email',
                message: 'enter a valid email'
              }
            ]}
            hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item 
              name={"phone-number"}
              label="Phone Number"
              required
              rules={[
                { 
                  required: true, 
                  message: 'Please Enter your phone number!' 
                },
                {
                  validator: (_, value) =>
                    value && value.length === 10
                      ? Promise.resolve()
                      : Promise.reject('Phone number must be exactly 10 digits!'),
                },
                {
                  pattern: /^[0-9]+$/,
                  message: 'Phone number must be numeric!'
                }
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Profile picture */}
        <Form.Item
          required
          rules={[
            {
                required: true,
                message: 'Upload your Photo!',
            },
          ]}
         label="Profile Upload" 
         valuePropName="fileList" 
         getValueFromEvent={normFile}
         >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        {/* LinkedIn url upload here */}
        <Form.Item 
        label="LinkedIn URL"
        name={"linkedInurl"}
        required
          rules={[
            {
                required: true,
                message: 'LinkedIn Url is mandatory!',
            },
            {
              pattern: /^(https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/.*$/i,
              message: 'Please enter a valid linkedIn URL'
            }
          ]}
          hasFeedback
        >
            <Input />
        </Form.Item>

        {/* Select designation you applied for */}
        <Form.Item 
        name={"designation"} 
        label="Designation" 
        required
        rules={[
          {
              required: true,
              message: 'Please Enter Your Designation!',
          },
          {
            whitespace: true
          },
          {
            min: 3
          }
        ]}
        hasFeedback
        >
          <Input />
        </Form.Item>

        {/* Adress*/}
        <Form.Item 
        required
        rules={[
            {
                required: true,
                message: 'Fill the address!',
            },
            {
              pattern: /^(?=.*[A-Za-z])[\w\s,.'/-]{10,}$/,
              message: 'Enter a valid address'
            },
            {
              min: 10,
              message: 'Address must be at least 10 characters long!',
            }
          ]}
          hasFeedback
          name={"Address"}
          label="Address">
          <Input />
        </Form.Item>

        {/* internship period and date */}
        
        {/* submit */}
        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default () => <InternshipForm/>;
