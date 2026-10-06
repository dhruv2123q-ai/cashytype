"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

export default function Payment() {
  const [utr, setUtr] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("cashytype_payment_utr");
    if (saved) {
      setUtr(saved);
      setSubmitted(true);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = utr.trim();

    if (value.length < 6) {
      setError("Please enter a valid UTR / transaction reference.");
      return;
    }

    window.localStorage.setItem("cashytype_payment_utr", value);
    window.localStorage.setItem("cashytype_payment_status", "pending");
    setError("");
    setSubmitted(true);
  }

  return (
    <main className="formArea">
      <div className="container">
        <div className="formCard" style={{ padding: 0, overflow: "hidden", maxWidth: 760 }}>
          <section className="paymentTop">
            <div className="brand" style={{ color: "#fff" }}>
              <span className="brandIcon" style={{ background: "#fff", color: "#078d27" }}>⌨</span>
              CashyType
            </div>
            <h1>Registration</h1>
            <p>One-time registration fee</p>
            <div className="price">₹99 <span style={{ fontSize: 16, fontWeight: 500 }}>one-time</span></div>
            <ul className="features">
              <li>✓ Account access</li>
              <li>✓ Task marketplace access</li>
              <li>✓ Profile and progress tools</li>
              <li>✓ Support through published channels</li>
            </ul>
          </section>

          <section className="paymentBody">
            {!submitted ? (
              <>
                <h2>Pay ₹99 &amp; Submit UTR</h2>
                <p className="muted">
                  Scan the QR code below and complete the ₹99 payment using your UPI app.
                  After payment, enter the UTR / transaction reference number here.
                </p>

                <div className="realQr">
                  <img src="/payment-qr.jpg" alt="CashyType payment QR code" />
                </div>

                <div className="notice">
                  <b>How it works:</b> Pay ₹99 → enter your UTR → submit for manual approval.
                  Your account will remain pending until the payment is checked.
                </div>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="utr" style={{ display: "block", fontWeight: 700, marginTop: 18, marginBottom: 8 }}>
                    UTR / Transaction Reference
                  </label>
                  <input
                    id="utr"
                    name="utr"
                    type="text"
                    value={utr}
                    onChange={(event) => setUtr(event.target.value)}
                    placeholder="Enter your UTR / transaction ID"
                    autoComplete="off"
                    style={{ width: "100%", boxSizing: "border-box" }}
                  />
                  {error && <p style={{ color: "#b42318", marginTop: 8 }}>{error}</p>}
                  <button
                    type="submit"
                    className="btn"
                    style={{ width: "100%", marginTop: 18, background: "#08b52b", color: "#fff" }}
                  >
                    Submit UTR for Approval
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "12px 0 20px" }}>
                <div style={{ fontSize: 52, marginBottom: 8 }}>⏳</div>
                <h2>Payment Submitted</h2>
                <p className="muted" style={{ lineHeight: 1.6 }}>
                  Your UTR has been submitted and your payment is <b>pending manual approval</b>.
                  We will activate the account only after the payment is verified.
                </p>
                <div className="notice" style={{ textAlign: "left", marginTop: 18 }}>
                  <b>UTR:</b> {utr}
                  <br />
                  <b>Status:</b> Pending approval
                </div>
                <p className="muted" style={{ marginTop: 16 }}>
                  Please keep your payment receipt until verification is complete.
                </p>
              </div>
            )}

            <Link className="back" href="/register">← Back to registration</Link>
          </section>
        </div>
      </div>
    </main>
  );
}
