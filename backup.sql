PGDMP          	            }            general_regulations_keywords    16.8    16.8     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    general_regulations_keywords    DATABASE     �   CREATE DATABASE general_regulations_keywords WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
 ,   DROP DATABASE general_regulations_keywords;
                postgres    false            �            1259    16410    regulations    TABLE     ?  CREATE TABLE public.regulations (
    id integer NOT NULL,
    clause_number text NOT NULL,
    category text NOT NULL,
    sub_category text,
    full_text text NOT NULL,
    summary text,
    related_references text,
    keywords text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.regulations;
       public         heap    postgres    false            �            1259    16409    regulations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.regulations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.regulations_id_seq;
       public          postgres    false    216            �           0    0    regulations_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.regulations_id_seq OWNED BY public.regulations.id;
          public          postgres    false    215            P           2604    16413    regulations id    DEFAULT     p   ALTER TABLE ONLY public.regulations ALTER COLUMN id SET DEFAULT nextval('public.regulations_id_seq'::regclass);
 =   ALTER TABLE public.regulations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16410    regulations 
   TABLE DATA           �   COPY public.regulations (id, clause_number, category, sub_category, full_text, summary, related_references, keywords, created_at) FROM stdin;
    public          postgres    false    216   :       �           0    0    regulations_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.regulations_id_seq', 12, true);
          public          postgres    false    215            W           2606    16418    regulations regulations_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.regulations
    ADD CONSTRAINT regulations_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.regulations DROP CONSTRAINT regulations_pkey;
       public            postgres    false    216            R           1259    16420    idx_category    INDEX     H   CREATE INDEX idx_category ON public.regulations USING btree (category);
     DROP INDEX public.idx_category;
       public            postgres    false    216            S           1259    16419    idx_clause_number    INDEX     R   CREATE INDEX idx_clause_number ON public.regulations USING btree (clause_number);
 %   DROP INDEX public.idx_clause_number;
       public            postgres    false    216            T           1259    16422    idx_keywords    INDEX     i   CREATE INDEX idx_keywords ON public.regulations USING gin (to_tsvector('english'::regconfig, keywords));
     DROP INDEX public.idx_keywords;
       public            postgres    false    216    216            U           1259    16421    idx_sub_category    INDEX     P   CREATE INDEX idx_sub_category ON public.regulations USING btree (sub_category);
 $   DROP INDEX public.idx_sub_category;
       public            postgres    false    216            �   �  x��WMs�6=ÿb/�$SF%+�|K��Ɍ�z�Ns�"!�PЊ��z��[@$A٣��",�>����ŵ��MI�v]�'��i�/�QVV���n�U�j�_��*�́*ޯ�J��鱃̆��mU�%vK�	'JҎv��S%yCkE.^WbA7X
[����ǭ��x�Qa�]�eS(�k���nt�HV=��� �8x�K�7�0A2�QE�nH��Dȅ�H�d5�o6��H�}%[��Z��ʨTO�2;f �f]�Y�)f����t�f6�i~;]�.����|9��������Z��t���|R�@�
���3�Z{��⥮#�z�
Y)�usK�m>�N_�ۚ=�pTj�dd�,��r;Y(|0��i���t�8��j��#\t	j����D)��h)"����;h��Ī�4�+�2��ϑ8��$�<��-���l��Yv�{��,yZr]����u[���W�bZ������5��㘃����7��̞*����{zƖ�WQx�̨�k$4������۶�-�)�g��������
	B���Ļԙ�� �a�ֲ�����H	�| �hώ��5���!J�ۚ"�;l�w>��m*�����`��P	Fy�W��_�Q#����Y��=P*�7�z�x����ED���[��X#?������ �]��@��Z%Vi�i�������ق��|�pR��e�,5�2U͓Z�_��]����6T�:zw}��(z�����&/�p\
<0NxQq!�V��mP&�N��A�@�@=�xT�P);	�c��o�瑢#��BXzh��i�X��Ƴ[Y�;0IxZ����h��W��ac�&��^�M �ՅY��1K��R��݈���Wpܸ��^F�֭�ʓNv��k�/��8Y4w�Q��>o�-�h*Y|u��ӏM���'+��sj�Ѱ�U�fG�Ql��$��p��Ο�J���Н��I|ڔ>XN5�P��$����%Y�+րa,�� ��7�c�F��$�m�G.Q�
���H�W�Ӯ<���)�g��/TES��A���.u�� �W��6>7��:Ԯ���'�#a���<$���I�n��V�ûv]��|do6�hv%�����B�-?�Nrh�^^n�eα���xH|6�c��>~S�.��	pG~N	�^a	�hh/2��-�7�5�c
93H��e��dC�AjL�^�ؕ��C�f\�Y��q�1��;X����-���T�ܝIYK~�=��ӟ��p����������@q��^�u[c��B��%=�w�glho�Wڢ��Z�=����i� =GH��a����D%�
��;�z̢��<�b~%�JrIq�co��^��r2�醽��Z[���r'���R7a`ym*cP9y.�'�x�>q�qOH�:��q0��ȐK�����`�3q��Yɍ�">q��Ӓ�m�JԢC�k��H��>�;��w������]N�p�e=' 6�B��m�/^6�^��3M...����     