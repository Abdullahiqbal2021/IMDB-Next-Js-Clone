import Image from 'next/image'
import React from 'react'

export default function Casts({ casts }) {
    return (
        <tbody>
            {casts.cast && casts.cast.map((each) => (
                <tr key={each.id} className="border border-amber-500 border-opacity-40 my-2"  >
                    <td className="my-4 ">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500/${each.profile_path}`}
                            alt={` ${each.character} image is not available`}
                            width={110}
                            height={70}
                            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                            placeholder="blur"
                            blurDataURL="/spinner.svg"
                            style={{
                                maxWidth: "auto",
                                height: "auto",
                                margin:"10px auto"
                            }}

                        ></Image>
                    </td>
                    <td className="text-center">{each.original_name || each.name}</td>
                    <td className="text-center">{each.character}</td>
                    <td className="text-center">{each.known_for_department}</td>
                </tr>
            ))}
        </tbody>
    )
}
