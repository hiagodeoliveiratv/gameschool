import { Box } from "@/components/dashboard/home/Box";
import { HiUsers } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Page = () => {
    return (
        <div>

            <h2 className="text-xl">Início</h2>

            <div className="grid md:grid-cols-4 gap-5 3 mt-10">
                <Box
                    label="Total Investido"
                    Icon={RiMoneyDollarCircleLine}
                    value="R$ 1.050,00"

                />
                <Box
                    label="Total Heads"
                    Icon={HiUsers}
                    value="55"

                />               
                <Box
                    label="Total Brokers"
                    Icon={HiUsers}
                    value="120"

                />
                <Box
                    label="Total Investidores"
                    Icon={HiUsers}
                    value="482"

                />                                              
            </div>
    
        </div>
    )
}

export default Page;