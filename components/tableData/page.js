import Image from 'next/image';
import React from 'react';


function TableData() {
    return (
        <div>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-red-800">
                        <th className="text-left text-white p-2 border border-black font-serif">Date</th>
                        <th className="text-left text-white p-2 border border-black w-2/3 font-serif">Description</th>
                        <th className="text-left text-white p-2 border border-black font-serif">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='font-serif font-semibold'>
                        <td className="text-left p-2 border border-black">Alfreds Futterkiste</td>
                        <td className="p-2 border border-black">
                            <div className=' flex flex-row'>
                                <Image src={"/new1.gif"} width={45}
                                    height={25} />
                                <h2 className='text-red-600'>Current Result</h2>
                               
                            </div>
                            Maria Anders
                        </td>

                        <td className="p-2 border border-black text-blue-600" >Click here</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}

export default TableData;
