
const Main = () => {
    const [line1, setLine1] = React.useState()
    const [line2, setLine2] = React.useState()
    const [imagen, setImagen] = React.useState()
    const [imgSize, setImgSize] = React.useState(300)
    const [lineSize, setLineSize] = React.useState(30)
    const [lineTop, setLineTop] = React.useState(248)

    const handleSelectImg = (event) => {
        setImagen(event.target.value)
    }

    const handleResizeImg = (event) => {
        setImgSize(event.target.value)
        calculateTop(event.target.value)
    }

    const handleResizeLine = (event) => {
        setLineSize(event.target.value)
        calculateTop(document.getElementById("imgSize").value)
    }

    const handleLine1 = (event) => {
        setLine1(event.target.value)
    }

    const handleLine2 = (event) => {
        setLine2(event.target.value)
    }

    const handleExport = () => {
        let meme = document.getElementById("meme")
        let bg = meme.style.backgroundColor
        meme.style.backgroundColor = '#000000'
        html2canvas(document.querySelector("#meme")).then(canvas => {
            let link = document.createElement('a')
            link.download = 'meme.jpg'
            link.href = canvas.toDataURL('image/jpg')
            link.click()
            meme.style.backgroundColor = bg
        });
    }

    const handleClear = () => {
        setImagen(0)
        setLine1()
        setLine2()
        setImgSize(300)
        setLineSize(30)
        calculateTop(300)
        document.getElementById("img").value = 0
        document.getElementById("inputLine1").value = ""
        document.getElementById("inputLine2").value = ""
        document.getElementById("imgSize").value = 300
        document.getElementById("lineSize").value = 30
    }

    const calculateTop = (newSize) => {
        let top = (newSize * 98) / 100
        let actualLineSize = document.getElementById("lineSize").value
        if (actualLineSize == 10) { top = top - 14 }
        if (actualLineSize == 20) { top = top - 28 }
        if (actualLineSize == 30) { top = top - 42 }
        if (actualLineSize == 40) { top = top - 56 }
        if (actualLineSize == 50) { top = top - 70 }
        setLineTop(top)
    }

    return (
        <div className="col-md-12">
            <div className="row card">
                <div className="col-md-5 center">
                    <label className="col-md-5 form-control">Select a meme: </label>
                    <select id="img" className="col-md-5 form-control" onChange={handleSelectImg}>
                        <option value="0" selected disabled>None</option>
                        <option value="1">Fire girl</option>
                        <option value="2">Matrix</option>
                        <option value="3">Smart Guy</option>
                    </select>
                    <br />
                    <label className="col-md-3 form-control">Size Img: </label>
                    <select id="imgSize" className="col-md-3 form-control" onChange={handleResizeImg}>
                        <option value="100">100 px</option>
                        <option value="200">200 px</option>
                        <option value="300" selected>300 px</option>
                        <option value="400">400 px</option>
                        <option value="500">500 px</option>
                    </select>
                    <label className="col-md-3 form-control">Size line: </label>
                    <select id="lineSize" className="col-md-2 form-control" onChange={handleResizeLine}>
                        <option value="10">10px</option>
                        <option value="20">20px</option>
                        <option value="30" selected>30px</option>
                        <option value="40">40px</option>
                        <option value="50">50px</option>
                    </select>
                    <br />
                    <input id="inputLine1" name="line1" type="text" className="form-control" placeholder="First line" onChange={handleLine1}></input>
                    <input id="inputLine2" name="line2" type="text" className="form-control" placeholder="Second line" onChange={handleLine2}></input>
                    <br />
                    <button type="button" className="btn btn-success" onClick={handleExport}>Export</button>
                    <button type="button" className="btn btn-primary" onClick={handleClear}>Clean</button>
                </div>
                <div className="clr"></div>
                {/* Aca la imagen */}
                <div className="col-md-6 center">
                    <div id="meme" width={imgSize + 'px'} height={imgSize + 'px'}>
                        <img tab="meme" width={imgSize} height={imgSize} alt="" src={"img/" + imagen + ".jpg"} />
                        <span id="line1" style={{ fontSize: lineSize + 'px' }}>{line1}</span>
                        <span id="line2" style={{ fontSize: lineSize + 'px', marginTop: lineTop }}>{line2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}