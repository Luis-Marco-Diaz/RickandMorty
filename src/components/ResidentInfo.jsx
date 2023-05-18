const ResidentInfo = ({ residentslist }) => {
    return (
        <div className="ResidentsInfo">
            <ul>
                {
                    residentslist?.map( residents => (
                        <li>
                            <h4> {residents.name} </h4>
                            <p><b>Status:</b> {residents.status} </p>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    );
}

export default ResidentInfo;
