// @ts-nocheck — UI bridge for the existing Deriv Bot Builder load workflow.
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import Button from '@/components/shared_ui/button';
import './trading-bots.scss';

const TradingBots = observer(() => {
    const { load_modal } = useStore();
    const { is_load_modal_open, toggleLoadModal } = load_modal;

    const openUpload = () => {
        if (!is_load_modal_open) toggleLoadModal();
    };

    return (
        <div className='trading-bots'>
            <div className='trading-bots__hero'>
                <div>
                    <h2>Trading Bots</h2>
                    <p>Upload and manage your Deriv Bot XML files. Uploaded bots can be opened in Bot Builder for review before you run them.</p>
                </div>
                <Button text='Upload Bot' primary large onClick={openUpload} />
            </div>

            <div className='trading-bots__grid'>
                <section className='trading-bots__card'>
                    <div className='trading-bots__icon'>↑</div>
                    <h3>Upload a bot</h3>
                    <p>Select an XML bot from your phone or computer. The existing Bot Builder import and preview workflow will handle the file.</p>
                    <Button text='Choose XML Bot' primary onClick={openUpload} />
                </section>

                <section className='trading-bots__card'>
                    <div className='trading-bots__icon'>▦</div>
                    <h3>Bot Builder</h3>
                    <p>After importing, review the blocks in Bot Builder and make any changes before starting the bot.</p>
                    <div className='trading-bots__status'>Manual review before execution</div>
                </section>

                <section className='trading-bots__card'>
                    <div className='trading-bots__icon'>✓</div>
                    <h3>Supported format</h3>
                    <p>XML bot files are supported through the app's existing Load Strategy system, including compatible third-party XML imports.</p>
                    <div className='trading-bots__status'>XML only</div>
                </section>
            </div>

            <section className='trading-bots__note'>
                <strong>Safety</strong>
                <span>Uploading a bot does not start it. Open the bot in Bot Builder, review it, and run it manually when you are ready.</span>
            </section>
        </div>
    );
});

export default TradingBots;
