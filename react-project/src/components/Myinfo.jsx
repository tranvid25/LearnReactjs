export default function Myinfo(props){
    return <div>
    <p>Tên: {props.info.name}</p>
    <p>Tuổi: {props.info.age.join(", ")}</p>
    <p>Địa chỉ: {props.info.address}</p>
    <p>Nghề nghiệp: {props.info.job}</p>
    <p>Màu yêu thích: {props.color}</p>
    </div>
}