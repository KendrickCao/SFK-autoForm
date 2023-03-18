import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Screenshot = (props) => {

    return (
        <Button onClick={props.getImage} type="primary" icon={<DownloadOutlined />}>截图</Button>
    );
}
export default Screenshot;

