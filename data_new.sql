--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-03-03 16:49:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16453)
-- Name: regulations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regulations (
    id integer NOT NULL,
    clause_number text NOT NULL,
    category text NOT NULL,
    sub_category text,
    full_text text NOT NULL,
    summary text,
    regulatory_references text,
    keywords text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.regulations OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16452)
-- Name: regulations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regulations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.regulations_id_seq OWNER TO postgres;

--
-- TOC entry 4855 (class 0 OID 0)
-- Dependencies: 217
-- Name: regulations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regulations_id_seq OWNED BY public.regulations.id;


--
-- TOC entry 4695 (class 2604 OID 16456)
-- Name: regulations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regulations ALTER COLUMN id SET DEFAULT nextval('public.regulations_id_seq'::regclass);


--
-- TOC entry 4849 (class 0 OID 16453)
-- Dependencies: 218
-- Data for Name: regulations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regulations (id, clause_number, category, sub_category, full_text, summary, regulatory_references, keywords, created_at) FROM stdin;
1	7	Land Subdivision	General Requirements	Where any land exceeds an extent of 0.5 hectare or more and is proposed to be subdivided into more than eight lots, compliance with planning regulations is mandatory.	Large land subdivisions require approval.	Official Clause 7	land subdivision, development, approval, hectare, lots	2025-03-03 15:56:32.176194
2	8	Land Subdivision	Survey Plan Requirements	Every Developer must submit a detailed survey plan (scale min: 1:1000) showing lot dimensions, roads, open spaces, and proposed uses.	Survey plans must meet scale & layout requirements.	Clause 8, 9	survey, land size, measurement, plot, planning, scale	2025-03-03 15:56:32.176194
3	9	Land Subdivision	Survey Plan Standards	Survey plans must conform to official land development standards, minimum plot sizes (150mý), and road width requirements.	Land subdivision must follow legal standards.	Clause 9, 14	land use, urban planning, infrastructure, zoning, development code	2025-03-03 15:56:32.176194
4	14	Land Subdivision	Plot Size Regulations	A subdivided lot cannot be smaller than 150mý in area, with minimum frontage of 6m and depth of 12m unless otherwise stated in development plans.	Minimum legal plot size for subdivision.	Clause 9	minimum plot, area, width, frontage, depth, zoning	2025-03-03 15:56:32.176194
5	17	Land Development	Road & Waterbody Compliance	Subdivisions near roads, rivers, or water bodies must meet additional environmental and planning conditions imposed by the Authority.	Subdivisions near sensitive areas need extra approvals.	Clause 17	environment, road access, water protection, land use	2025-03-03 15:56:32.176194
6	18	Infrastructure	Road Access Rules	Non-residential sites require roads at least 9m wide, and residential lots must comply with minimum road access width regulations.	Strict road width rules apply to land subdivisions.	Clause 18	road width, zoning, transportation, building regulations	2025-03-03 15:56:32.176194
7	19	Land Development	Street Line Compliance	If an access road lacks designated street lines, its width will be determined based on existing conditions or official planning rules.	Road width rules depend on existing layouts.	Clause 19	street lines, access roads, legal compliance, city planning	2025-03-03 15:56:32.176194
8	23	Community & Recreation	Community Space Requirement	Subdivisions over 1 hectare must allocate at least 10% of the land (excluding roads) for community/recreational spaces.	10% land must be reserved for public spaces.	Clause 23, 24	community area, green space, public land, social infrastructure	2025-03-03 15:56:32.176194
9	25	Residential Development	Subdivision Exemption	For residential subdivisions with lots of at least 1012mý and only two housing units, the 10% community space rule may be waived.	Some residential developments may be exempt.	Clause 25	housing, residential zoning, building exemption	2025-03-03 15:56:32.176194
10	30	Building Development	Development Permit Validity	A Development Permit is valid for one year, extendable for up to two additional years if work has started.	Development Permits valid up to three years.	Clause 30	building permit, construction rules, legal timeline	2025-03-03 15:56:32.176194
11	34	Planning & Surveying	Site Plan Requirements	Site plans must include boundaries, road access, drainage, and flood levels.	Site plans must show infrastructure details.	Clause 34	surveying, drainage, flood zones, infrastructure planning	2025-03-03 15:56:32.176194
12	41	Building Safety	Fire Safety Compliance	Buildings over 15m or with 5+ residential units must comply with fire safety regulations.	Tall buildings require fire safety clearance.	Clause 41	fire protection, building height, clearance, safety regulations	2025-03-03 15:56:32.176194
\.


--
-- TOC entry 4856 (class 0 OID 0)
-- Dependencies: 217
-- Name: regulations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.regulations_id_seq', 12, true);


--
-- TOC entry 4702 (class 2606 OID 16461)
-- Name: regulations regulations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regulations
    ADD CONSTRAINT regulations_pkey PRIMARY KEY (id);


--
-- TOC entry 4697 (class 1259 OID 16463)
-- Name: idx_category; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_category ON public.regulations USING btree (category);


--
-- TOC entry 4698 (class 1259 OID 16462)
-- Name: idx_clause_number; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_clause_number ON public.regulations USING btree (clause_number);


--
-- TOC entry 4699 (class 1259 OID 16465)
-- Name: idx_keywords; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_keywords ON public.regulations USING gin (to_tsvector('english'::regconfig, keywords));


--
-- TOC entry 4700 (class 1259 OID 16464)
-- Name: idx_sub_category; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_sub_category ON public.regulations USING btree (sub_category);


-- Completed on 2025-03-03 16:49:21

--
-- PostgreSQL database dump complete
--

