import React from 'react';

const FindTalent = () => {
    return (
        <>
            <h1 className='text-4xl font-bold mb-10 text-center mt-26'>Find Talent</h1>
            <div className="hero h-[96] " style={{ backgroundImage: 'url(https://i.ibb.co/R9NJ9SR/other-675x390-675x390.jpg)', borderRadius: '10px' , backgroundAttachment: 'fixed'}}>
                <div className="hero-overlay bg-opacity-60 rounded-xl "></div>

                <div className="hero-content text-neutral-content py-20">
                    <div className="w-1/2 text-left">
                        <h1 className="mb-5 text-5xl font-bold">Find talent your way</h1>
                        <p className="mb-5 text-left">Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
                        <div className="form-control flex">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-black " />
                        <button className="btn bg-blue-900 w-[140px] text-white hover:text-blue-900 mt-3">Search</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default FindTalent;