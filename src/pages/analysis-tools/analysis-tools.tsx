import React, { useMemo, useState } from 'react';
import './analysis-tools.scss';

type Tool = 'Circles' | 'Signals' | 'Analysis Tool' | 'SL Tools' | 'All Analysis' | 'Copy Trading';

const TOOLS: Tool[] = ['Circles', 'Signals', 'Analysis Tool', 'SL Tools', 'All Analysis', 'Copy Trading'];

const AnalysisTools = () => {
    const [activeTool, setActiveTool] = useState<Tool>('Circles');
    const [market, setMarket] = useState('Volatility 10 (1s)');
    const [stopLoss, setStopLoss] = useState('5');
    const [takeProfit, setTakeProfit] = useState('10');
    const [maxLosses, setMaxLosses] = useState('3');
    const [copyEnabled, setCopyEnabled] = useState(false);
    const digits = useMemo(() => [18, 14, 12, 11, 10, 9, 8, 7, 6, 5], []);

    return (
        <div className='analysis-tools'>
            <div className='analysis-tools__header'>
                <div>
                    <h2>Analysis Tools</h2>
                    <p>Market analysis and trading utilities. Live values will populate when market data is available.</p>
                </div>
                <select value={market} onChange={e => setMarket(e.target.value)}>
                    <option>Volatility 10 (1s)</option>
                    <option>Volatility 25 (1s)</option>
                    <option>Volatility 50 (1s)</option>
                    <option>Volatility 75 (1s)</option>
                    <option>Volatility 100 (1s)</option>
                    <option>Jump 10</option>
                </select>
            </div>

            <div className='analysis-tools__tabs'>
                {TOOLS.map(tool => (
                    <button key={tool} className={activeTool === tool ? 'active' : ''} onClick={() => setActiveTool(tool)}>
                        {tool}
                    </button>
                ))}
            </div>

            {activeTool === 'Circles' && (
                <section className='tool-card'>
                    <h3>Digit Distribution</h3>
                    <div className='digit-grid'>
                        {digits.map((value, digit) => (
                            <div className='digit-item' key={digit}>
                                <span className='digit-circle'>{digit}</span>
                                <strong>{value}%</strong>
                            </div>
                        ))}
                    </div>
                    <p className='muted'>Display placeholder until the live market stream is connected.</p>
                </section>
            )}

            {activeTool === 'Signals' && (
                <section className='cards-grid'>
                    {['Matches', 'Differs', 'Over / Under', 'Rise / Fall'].map(name => (
                        <div className='tool-card signal-card' key={name}>
                            <span className='label'>{name}</span>
                            <strong>WAIT</strong>
                            <span className='muted'>Signal strength —</span>
                        </div>
                    ))}
                </section>
            )}

            {activeTool === 'Analysis Tool' && (
                <section className='cards-grid'>
                    {[
                        ['Digit frequency', 'Live feed pending'],
                        ['Recent movement', 'Live feed pending'],
                        ['Model confidence', '—'],
                        ['Historical evidence', '—'],
                    ].map(([title, value]) => (
                        <div className='tool-card' key={title}>
                            <h3>{title}</h3>
                            <strong>{value}</strong>
                        </div>
                    ))}
                </section>
            )}

            {activeTool === 'SL Tools' && (
                <section className='tool-card form-grid'>
                    <label>Stop Loss<input value={stopLoss} onChange={e => setStopLoss(e.target.value)} inputMode='decimal' /></label>
                    <label>Take Profit<input value={takeProfit} onChange={e => setTakeProfit(e.target.value)} inputMode='decimal' /></label>
                    <label>Max consecutive losses<input value={maxLosses} onChange={e => setMaxLosses(e.target.value)} inputMode='numeric' /></label>
                    <div className='tool-note'>Risk controls are configuration only; this page does not place trades.</div>
                </section>
            )}

            {activeTool === 'All Analysis' && (
                <section className='cards-grid'>
                    <div className='tool-card'><h3>Market</h3><strong>{market}</strong></div>
                    <div className='tool-card'><h3>Signal status</h3><strong>WAIT</strong></div>
                    <div className='tool-card'><h3>Risk controls</h3><strong>Configured</strong></div>
                    <div className='tool-card'><h3>Execution</h3><strong>Manual</strong></div>
                </section>
            )}

            {activeTool === 'Copy Trading' && (
                <section className='tool-card copy-card'>
                    <div>
                        <h3>Copy Trading</h3>
                        <p className='muted'>Configuration workspace only. Automatic contract execution is not enabled.</p>
                    </div>
                    <label className='toggle-row'>
                        <span>Enable copy workspace</span>
                        <input type='checkbox' checked={copyEnabled} onChange={e => setCopyEnabled(e.target.checked)} />
                    </label>
                    <div className='copy-status'>{copyEnabled ? 'Ready for configuration' : 'Disabled'}</div>
                    <div className='tool-note'>No contracts are purchased from this page.</div>
                </section>
            )}
        </div>
    );
};

export default AnalysisTools;
