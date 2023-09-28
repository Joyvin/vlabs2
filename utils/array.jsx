import React, { memo, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

const Array = memo(({ data, isConnectable }) => {

    const getBlanks = (n) => {
        let a = ''
        for (let i = 0; i < n; i++) {
            a += ' '
        }
        return a
    }

    const len = data.length ? data.length : data.label.length
    const b = len - data.label.length

    return (
        <>
            <div className="text-dark">
                {data.input ? <Handle
                    type={data.type}
                    position={Position.Left}
                    style={{ background: '#555' }}
                    onConnect={(params) => console.log('handle onConnect', params)}
                    isConnectable={isConnectable}
                /> : ''}
                <div className="text-gray-200" style={{ fontSize: 'x-small' }}>
                    <sub>{data.address}</sub>
                </div>
                <div className={`flex items-center justify-center shadow rounded-lg border border-blue-700 ${data.selected ? 'bg-blue-700 text-white' : 'bg-white'}`}
                    style={{ minWidth: '50px', minHeight: '50px' }}>
                    {
                        [...data.label].map((char, index) => {
                            return (
                                <>
                                    <div key={index} className="">
                                        <div style={{ height: '50px', width: '50px' }} className={`flex ${data.currIndex === index ? 'bg-blue-700 text-white' : ''} items-center ${data.label.length - 1 !== index || len !== data.label.length || data.addNull ? 'border-r' : ''} border-blue-700 justify-center`}>
                                            {char}
                                        </div>
                                        <div className="ml-2" style={{ fontSize: 'x-small', position: 'absolute', bottom: '8px' }}>
                                            <sub>{index}</sub>
                                        </div>
                                    </div>
                                    {
                                        data.addNull && index + 1 === data.label.length ?
                                            <div key={index + 1} className="">
                                                <div style={{ height: '50px', width: '50px' }} className={`flex ${data.currIndex === index + 1 ? 'bg-blue-700 text-white' : ''} ${len !== data.label.length ? 'border-r' : ''} items-center border-blue-700 justify-center`}>
                                                    \0
                                                </div>
                                                <div className="ms-2" style={{ fontSize: 'x-small', position: 'absolute', bottom: '8px' }}>
                                                    <sub>{index + 1}</sub>
                                                </div>
                                            </div>
                                            : ''
                                    }
                                </>
                            )
                        })
                    }
                    {
                        [...getBlanks(b)].map((char, index) => {
                            return (
                                <div key={index} className="">
                                    <div style={{ height: '50px', width: '50px' }} className={`flex ${data.currIndex === data.label.length + index ? 'bg-blue-700 text-white' : ''} items-center ${len - 1 !== data.label.length + index ? 'border-r' : ''} border-blue-700 justify-center`}>
                                        {char}
                                    </div>
                                    <div className="ms-2" style={{ fontSize: 'x-small', position: 'absolute', bottom: '8px' }}>
                                        <sub>{data.label.length + index}</sub>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="inline-flex" style={{ position: 'relative', top: '1rem' }}>{data.name}</div>
            </div>
        </>
    );
});

export default Array;
