import { useEffect, useState } from "react";
import Image from "next/image";
// import single from "../components/single.module.css";
export default function Single() {
    const [sigdata, setSigdata] = useState([]);

    useEffect(() => {
        var id = localStorage.getItem("slug");
        fetch('https://cms.dev.youverify.co/blogs/?slug=kyc-checklist-for-banks')
            .then((res) => res.json())
            .then((res) => {
                setSigdata(res);
            });
    }, []);
    return (
        <div>
            {sigdata.map((sid) => (
                <div
                    style={{
                        justifyContent: "center",
                        textAlign: "center",
                        marginLeft: "50px",
                        marginRight: "50px",
                    }}
                    key={sid.id}
                >
                    <div>
                        <h1 style={{ textAlign: "center" }}>{sid.title}</h1>
                        <Image
                            src={sid.image.url}
                            alt="This is the image"
                            height={500}
                            width={900}
                        />
                        <h1>{sid.teaser}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

