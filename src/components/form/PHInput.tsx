import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    name: string;
    type: string;
    label?: string;
}


const PHInput = ({ name, type, label }: TInputProps) => {

    return (
        <div style={{ marginBottom: '20px' }}>
            {/* {label ? label : null} */}

            <Controller
                name={name}
                render={({ field }) =>(
                    <Form.Item label={label} >
                        <Input className="border" {...field} type={type} id={name} />
                    </Form.Item>
                ) }


            />
            {/* <Input className="border" type={type} id={name}  {...register(name)} /> */}

        </div>
    )

};

export default PHInput;