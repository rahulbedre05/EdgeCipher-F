import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Notification panel
    const notificationBtn = document.getElementById('notification-btn');
    const notificationPanel = document.getElementById('notification-panel');
    const closeNotifications = document.getElementById('close-notifications');
    if (notificationBtn && notificationPanel && closeNotifications) {
      notificationBtn.addEventListener('click', function() {
        notificationPanel.classList.toggle('active');
      });
      closeNotifications.addEventListener('click', function() {
        notificationPanel.classList.remove('active');
      });
    }

    // Modal helpers
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal-content');
    function showModal(html: string) {
      if (overlay && modal) {
        overlay.style.display = 'flex';
        modal.style.display = 'block';
        modal.innerHTML = html + '<div style="text-align:right;margin-top:18px;"><button onclick="document.getElementById(\'modal-overlay\').style.display=\'none\';document.getElementById(\'modal-content\').style.display=\'none\';" style="background:var(--primary);color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:15px;cursor:pointer;">Close</button></div>';
      }
    }
    if (overlay) {
      overlay.onclick = function(e: any) {
        if (e.target === overlay) {
          overlay.style.display = 'none';
          if (modal) modal.style.display = 'none';
        }
      };
    }

    // AI Panel helpers
    const aiPanel = document.getElementById('ai-panel');
    const aiPanelContent = document.getElementById('ai-panel-content');
    const closeAIPanel = document.getElementById('close-ai-panel');
    if (closeAIPanel && aiPanel) {
      closeAIPanel.onclick = function() {
        aiPanel.style.display = 'none';
      };
    }
    function showAIPanel(html: string) {
      if (aiPanelContent && aiPanel) {
        aiPanelContent.innerHTML = html;
        aiPanel.style.display = 'block';
      }
    }

    // Card click handlers
    const balanceCard = document.getElementById('balance-card');
    if (balanceCard) {
      balanceCard.onclick = function() {
        showModal(`
          <h2 style='font-family:Poppins,sans-serif;font-size:22px;margin-bottom:12px;'><i class='fas fa-wallet'></i> Account Summary</h2>
          <div style='margin-bottom:10px;'>
              <b>Total Balance:</b> <span style='color:var(--secondary);font-size:20px;'>₹5,42,367</span><br>
              <b>Cash:</b> ₹2,10,000<br>
              <b>Invested:</b> ₹3,32,367
          </div>
          <div style='margin-bottom:10px;'>
              <b>Connected Brokers:</b>
              <ul style='margin:8px 0 0 18px;'>
                  <li>Upstox: ₹2,10,000</li>
                  <li>Zerodha: ₹1,80,000</li>
                  <li>Binance: ₹1,52,367</li>
              </ul>
          </div>
          <div style='margin-bottom:10px;'>
              <button style='background:var(--primary);color:#fff;border:none;padding:7px 16px;border-radius:5px;margin-right:8px;cursor:pointer;'>Add Broker</button>
              <button style='background:var(--secondary);color:#fff;border:none;padding:7px 16px;border-radius:5px;cursor:pointer;'>Refresh Balance</button>
          </div>
        `);
      };
    }
    const monthlyReturnCard = document.getElementById('monthly-return-card');
    if (monthlyReturnCard) {
      monthlyReturnCard.onclick = function() {
        showModal(`
          <h2 style='font-family:Poppins,sans-serif;font-size:22px;margin-bottom:12px;'><i class='fas fa-chart-line'></i> Monthly Performance Report</h2>
          <div style='margin-bottom:10px;'>
              <b>Return (Sep 2025):</b> <span style='color:var(--secondary);font-size:20px;'>+12.7%</span>
          </div>
          <div style='margin-bottom:10px;'>
              <b>Equity Curve:</b><br>
              <img src='https://dummyimage.com/320x80/2c6bed/fff&text=Equity+Curve' alt='Equity Curve' style='width:100%;border-radius:6px;margin:8px 0;'>
          </div>
          <div style='margin-bottom:10px;'>
              <b>P&L Breakdown:</b>
              <ul style='margin:8px 0 0 18px;'>
                  <li>By Strategy: EMA Cross +8.2%, RSI +4.5%</li>
                  <li>By Asset: BTC +6.1%, ETH +3.2%, Others +3.4%</li>
                  <li>By Day: Best - Monday (+3.1%), Worst - Thursday (-1.2%)</li>
              </ul>
          </div>
          <div style='margin-bottom:10px;'>
              <b>Comparison:</b> Last Month +7.9%, 2 Months Ago +5.2%
          </div>
        `);
      };
    }
    const winrateCard = document.getElementById('winrate-card');
    if (winrateCard) {
      winrateCard.onclick = function() {
        showModal(`
          <h2 style='font-family:Poppins,sans-serif;font-size:22px;margin-bottom:12px;'><i class='fas fa-trophy'></i> Win Rate Analytics</h2>
          <div style='margin-bottom:10px;'>
              <b>Win Rate:</b> <span style='color:var(--secondary);font-size:20px;'>64.3%</span>
          </div>
          <div style='margin-bottom:10px;'>
              <b>Distribution:</b> 18 Wins, 10 Losses, 2 Breakeven
          </div>
          <div style='margin-bottom:10px;'>
              <b>Heatmap:</b><br>
              <img src='https://dummyimage.com/320x60/00c6a9/fff&text=Win+Rate+Heatmap' alt='Heatmap' style='width:100%;border-radius:6px;margin:8px 0;'>
          </div>
          <div style='margin-bottom:10px;'>
              <b>AI Insights:</b> "Your win rate is highest on Mondays and in the morning session. Try to avoid trading after 2pm."
          </div>
        `);
      };
    }
    const openTradesCard = document.getElementById('open-trades-card');
    if (openTradesCard) {
      openTradesCard.onclick = function() {
        showModal(`
          <h2 style='font-family:Poppins,sans-serif;font-size:22px;margin-bottom:12px;'><i class='fas fa-list'></i> Live Positions</h2>
          <table style='width:100%;margin-bottom:10px;'>
              <thead><tr style='color:var(--text-secondary);'><th>Symbol</th><th>Dir</th><th>Entry</th><th>P&L</th><th>%</th><th>Actions</th></tr></thead>
              <tbody>
                  <tr><td>BTC/USDT</td><td>Long</td><td>₹42,00,000</td><td style='color:var(--secondary);'>+₹18,000</td><td style='color:var(--secondary);'>+4.2%</td><td><button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;'>Close</button> <button style='background:var(--secondary);color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;'>Modify</button></td></tr>
                  <tr><td>ETH/USDT</td><td>Short</td><td>₹1,90,000</td><td style='color:var(--secondary);'>+₹2,000</td><td style='color:var(--secondary);'>+1.1%</td><td><button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;'>Close</button> <button style='background:var(--secondary);color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;'>Modify</button></td></tr>
                  <tr><td>XRP/USDT</td><td>Long</td><td>₹45.00</td><td style='color:var(--secondary);'>+₹400</td><td style='color:var(--secondary);'>+2.1%</td><td><button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;'>Close</button> <button style='background:var(--secondary);color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;'>Modify</button></td></tr>
              </tbody>
          </table>
          <button style='background:var(--accent);color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:15px;cursor:pointer;'>Close All</button>
        `);
      };
    }
    const portfolioChart = document.getElementById('portfolio-chart');
    if (portfolioChart) {
      portfolioChart.onclick = function() {
        showModal(`
          <h2 style='font-family:Poppins,sans-serif;font-size:22px;margin-bottom:12px;'><i class='fas fa-chart-line'></i> Equity Curve Analysis</h2>
          <div style='margin-bottom:10px;'>
              <b>Timeframes:</b> <button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;margin-right:4px;cursor:pointer;'>1M</button><button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;margin-right:4px;cursor:pointer;'>3M</button><button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;margin-right:4px;cursor:pointer;'>6M</button><button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;margin-right:4px;cursor:pointer;'>1Y</button><button style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;'>Max</button>
          </div>
          <div style='margin-bottom:10px;'>
              <b>Equity Curve:</b><br>
              <img src='https://dummyimage.com/340x90/2c6bed/fff&text=Equity+Curve' alt='Equity Curve' style='width:100%;border-radius:6px;margin:8px 0;'>
          </div>
          <div style='margin-bottom:10px;'>
              <b>Benchmarks:</b> Nifty 50, Bitcoin
          </div>
          <div style='margin-bottom:10px;'>
              <b>Drawdown Analysis:</b> Zoom in on drawdown periods for detailed review.
          </div>
        `);
      };
    }
    const aiTipCard = document.getElementById('ai-tip-card');
    if (aiTipCard) {
      aiTipCard.onclick = function() {
        showAIPanel(`
          <h3 style='font-family:Poppins,sans-serif;font-size:19px;margin-bottom:10px;'><i class='fas fa-lightbulb'></i> Trading Tip</h3>
          <div style='margin-bottom:10px;'>Your EMA Cross strategy performs better in bull markets.</div>
          <div style='margin-bottom:10px;'><b>Proof (Backtest):</b><br><img src='https://dummyimage.com/320x60/00c6a9/fff&text=Bull+Market+Backtest' alt='Backtest' style='width:100%;border-radius:6px;margin:8px 0;'></div>
          <div style='margin-bottom:10px;'><button style='background:var(--primary);color:#fff;border:none;padding:7px 16px;border-radius:5px;cursor:pointer;'>Auto-Apply Filter</button></div>
        `);
      };
    }
    const aiWarningCard = document.getElementById('ai-warning-card');
    if (aiWarningCard) {
      aiWarningCard.onclick = function() {
        showAIPanel(`
          <h3 style='font-family:Poppins,sans-serif;font-size:19px;margin-bottom:10px;'><i class='fas fa-exclamation-triangle'></i> Warning</h3>
          <div style='margin-bottom:10px;'>You tend to exit winners 20% early.</div>
          <div style='margin-bottom:10px;'><b>Recent Trades:</b><br><ul style='margin:8px 0 0 18px;'><li>BTC/USDT: Exited at ₹44,000 (could have held to ₹45,000)</li><li>ETH/USDT: Exited at ₹1,80,000 (could have held to ₹1,82,000)</li></ul></div>
          <div style='margin-bottom:10px;'><button style='background:var(--secondary);color:#fff;border:none;padding:7px 16px;border-radius:5px;cursor:pointer;'>Set Up Trailing Stop</button></div>
        `);
      };
    }
    // Recent Trades Table
    document.querySelectorAll('.recent-trades-table tbody tr').forEach(row => {
      row.addEventListener('click', function() {
        const symbol = row.getAttribute('data-symbol');
        let tradeData: any = {
          'BTC/USDT': {
            dir: 'Long', entry: '₹42,00,000', exit: '₹45,00,000', pnl: '+₹1,20,000', ret: '+7.1%',
            chart: 'https://dummyimage.com/320x60/2c6bed/fff&text=BTC+Trade+Chart',
            ai: 'You timed the entry well, but could have trailed the stop for more profit.',
            stats: 'P&L: ₹1,20,000 | Risk/Reward: 2.1 | Duration: 3d 4h'
          },
          'ETH/USDT': {
            dir: 'Short', entry: '₹1,90,000', exit: '₹1,82,000', pnl: '+₹8,000', ret: '+4.2%',
            chart: 'https://dummyimage.com/320x60/00c6a9/fff&text=ETH+Trade+Chart',
            ai: 'Good exit, but entry was a bit early. Consider waiting for confirmation.',
            stats: 'P&L: ₹8,000 | Risk/Reward: 1.5 | Duration: 1d 7h'
          },
          'XRP/USDT': {
            dir: 'Long', entry: '₹45.00', exit: '₹48.20', pnl: '+₹1,200', ret: '+7.1%',
            chart: 'https://dummyimage.com/320x60/2c6bed/fff&text=XRP+Trade+Chart',
            ai: 'Entry was perfect, but you exited a bit early.',
            stats: 'P&L: ₹1,200 | Risk/Reward: 1.8 | Duration: 2d 2h'
          },
          'SOL/USDT': {
            dir: 'Long', entry: '₹5,200', exit: '₹5,800', pnl: '+₹2,400', ret: '+11.5%',
            chart: 'https://dummyimage.com/320x60/00c6a9/fff&text=SOL+Trade+Chart',
            ai: 'Great trade! Consider scaling out next time.',
            stats: 'P&L: ₹2,400 | Risk/Reward: 2.3 | Duration: 4d 1h'
          }
        };
        let t = tradeData[symbol!];
        showModal(`
          <h2 style='font-family:Poppins,sans-serif;font-size:22px;margin-bottom:12px;'><i class='fas fa-book'></i> Trade Journal: ${symbol}</h2>
          <div style='margin-bottom:10px;'><b>Direction:</b> ${t.dir}</div>
          <div style='margin-bottom:10px;'><b>Entry:</b> ${t.entry} <b>Exit:</b> ${t.exit}</div>
          <div style='margin-bottom:10px;'><b>P&L:</b> ${t.pnl} <b>Return:</b> ${t.ret}</div>
          <div style='margin-bottom:10px;'><b>Chart View:</b><br><img src='${t.chart}' alt='Trade Chart' style='width:100%;border-radius:6px;margin:8px 0;'></div>
          <div style='margin-bottom:10px;'><b>AI Analysis:</b> ${t.ai}</div>
          <div style='margin-bottom:10px;'><b>Statistics:</b> ${t.stats}</div>
          <div style='margin-bottom:10px;'><button style='background:var(--primary);color:#fff;border:none;padding:7px 16px;border-radius:5px;margin-right:8px;cursor:pointer;'>Replay Trade</button><button style='background:var(--secondary);color:#fff;border:none;padding:7px 16px;border-radius:5px;margin-right:8px;cursor:pointer;'>Share to Community</button><button style='background:var(--accent);color:#fff;border:none;padding:7px 16px;border-radius:5px;cursor:pointer;'>Add Note</button></div>
        `);
      });
    });
    // Market Overview Chart
    const marketOverviewChart = document.getElementById('market-overview-chart');
    if (marketOverviewChart) {
      marketOverviewChart.onclick = function() {
        showModal(`
          <h2 style='font-family:Poppins,sans-serif;font-size:22px;margin-bottom:12px;'><i class='fas fa-chart-bar'></i> Market Overview</h2>
          <div style='margin-bottom:10px;'>
              <b>Choose Asset:</b> 
              <span id='asset-btns'></span>
          </div>
          <div style='margin-bottom:10px;'>
              <b>Timeframe:</b> 1D (Daily)
          </div>
          <div style='margin-bottom:10px;'>
              <b>Start your analysis instantly for the selected asset.</b>
          </div>
          <div id='asset-chart-view'></div>
        `);
        // Add asset buttons and handlers
        const assets = [
          {name:'BTC', color:'#2c6bed', chart:'https://dummyimage.com/320x60/2c6bed/fff&text=BTC+Chart'},
          {name:'ETH', color:'#00c6a9', chart:'https://dummyimage.com/320x60/00c6a9/fff&text=ETH+Chart'},
          {name:'XRP', color:'#2c6bed', chart:'https://dummyimage.com/320x60/2c6bed/fff&text=XRP+Chart'},
          {name:'SOL', color:'#00c6a9', chart:'https://dummyimage.com/320x60/00c6a9/fff&text=SOL+Chart'}
        ];
        const btns = assets.map(a => `<button class='asset-btn' data-asset='${a.name}' style='background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:4px;margin-right:4px;cursor:pointer;'>${a.name}</button>`).join('');
        const assetBtns = document.getElementById('asset-btns');
        if (assetBtns) assetBtns.innerHTML = btns;
        document.querySelectorAll('.asset-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            const asset = (btn as HTMLElement).getAttribute('data-asset');
            const a = assets.find(x => x.name === asset);
            const assetChartView = document.getElementById('asset-chart-view');
            if (assetChartView && a) {
              assetChartView.innerHTML = `<div style='margin-top:10px;'><b>${asset}/USDT Chart (1D)</b><br><img src='${a.chart}' style='width:100%;border-radius:6px;'></div>`;
            }
          });
        });
      };
    }
  }
}
