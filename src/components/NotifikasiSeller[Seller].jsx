import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NotifikasiSeller () {
    return (
        <div className="mx-auto my-5 py-3 px-3 border custom-border-auth custom-space-harga-tawar-2">
            <div className="row">
                <div className="col-md-2">
                    <img src={require("../images/jam_kecil.png")} alt="Jam" className="mt-2" />
                </div>
        
                <div className="col-md-10">
                    <div className="row ">
                        <div className="col-md-6">
                            <span className="text-muted custom-font-5">Penawaran produk</span>
                        </div>
                        <div className="col-md-6 text-right">
                            <span className="text-muted custom-font-5">
                            20 Apr, 14:04 &nbsp;
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="custom-bg-notif-2"
                            />
                            </span>
                        </div>
                    </div>
    
                    <p className="text-dark custom-font-1">Jam Tangan Casio</p>
                    <p className="text-dark custom-font-1 custom-space-top">
                        Rp 250.000
                    </p>
                    <p className="text-dark custom-font-1 custom-space-top">Ditawar Rp 200.000</p>
                </div>
            </div>
        
            <hr className="w-100" />
    
            <div className="row">
                <div className="col-md-2">
                    <img src={require("../images/jam_kecil.png")} alt="Jam" className="mt-2" />
                </div>
    
                <div className="col-md-10">
                    <div className="row ">
                        <div className="col-md-6">
                            <span className="text-muted custom-font-5">Berhasil di terbitkan</span>
                        </div>
                        <div className="col-md-6 text-right">
                            <span className="text-muted custom-font-5">
                            19 Apr, 12:00 &nbsp;
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="custom-bg-notif-2"
                            />
                            </span>
                        </div>
                    </div>
        
                    <p className="text-dark custom-font-1">Jam Tangan Casio</p>
                    <p className="text-dark custom-font-1 custom-space-top">Rp 250.000</p>
                </div>
            </div>
        </div>
    )
}